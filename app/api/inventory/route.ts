import { NextResponse } from 'next/server';
import { ALL_PRODUCTS, CATALOG } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const limit = parseInt(searchParams.get('limit') || '50', 10);
  const offset = parseInt(searchParams.get('offset') || '0', 10);

  let filtered = ALL_PRODUCTS;

  if (category) {
    filtered = filtered.filter(p => 
      p.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  if (search) {
    const s = search.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(s) || 
      p.category.toLowerCase().includes(s)
    );
  }

  const paginated = filtered.slice(offset, offset + limit);

  return NextResponse.json({
    success: true,
    data: {
      total: filtered.length,
      count: paginated.length,
      limit,
      offset,
      products: paginated,
      categories: CATALOG.map(c => ({
        name: c.name,
        subcategories: c.subCollections?.map(sc => sc.name) || []
      }))
    }
  });
}
