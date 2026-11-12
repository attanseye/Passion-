import { CATALOG, ALL_PRODUCTS } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppAIWidget } from '@/components/WhatsAppAIWidget';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return CATALOG.map((collection) => ({
    slug: encodeURIComponent(collection.name),
  }));
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  
  const collection = CATALOG.find(c => c.name === decodedSlug);
  
  if (!collection) {
    notFound();
  }

  const products = collection.products || (collection.subCollections?.flatMap(sc => sc.products) || []);

  const seed = collection.name.replace(/[^a-zA-Z0-9]/g, '');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FCE7ED] via-[#FDF0F3] to-[#F8DEE6] text-gray-900">
      <div className="bg-pink-600 text-white text-xs font-medium tracking-wide py-2 text-center">
        Nationwide delivery available across Nigeria – Fast and Secure
      </div>
      
      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-gray-900 font-medium">{collection.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Collection Hero */}
        <div className="relative border-b border-gray-100 bg-neutral-50/50 h-56 sm:h-72 md:h-80">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${collection.image})` }}
          />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
          <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-4 max-w-4xl">
              {collection.name}
            </h1>
            <p className="text-base text-gray-800 max-w-2xl font-medium">
              Explore our premium collection of {collection.name.toLowerCase()} for professionals.
            </p>
          </div>
        </div>

        {/* Filters and Products grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-100 pb-4 gap-4">
            <h2 className="text-xl font-medium text-gray-900 hidden md:block">Filter & Sort</h2>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
               <button className="md:hidden text-sm font-medium text-gray-900 border border-gray-200 px-4 py-2 hover:bg-gray-50 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                 Filter
               </button>
               
               <div className="flex items-center gap-4 ml-auto">
                 <p className="text-sm text-gray-500 font-medium hidden sm:block">{products.length} products</p>
                 <select className="text-sm border-gray-200 text-gray-700 bg-white shadow-sm p-2 outline-none focus:border-pink-300">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Alphabetically, A-Z</option>
                 </select>
               </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden md:block w-64 flex-shrink-0 space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Availability</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500" defaultChecked />
                    <span className="text-sm text-gray-600 group-hover:text-gray-900">In stock ({products.length})</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group opacity-50">
                    <input type="checkbox" className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500" disabled />
                    <span className="text-sm text-gray-600">Out of stock (0)</span>
                  </label>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Price</h3>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">₦</span>
                    <input type="number" placeholder="From" className="w-full border border-gray-200 pl-8 pr-3 py-2 text-sm focus:outline-none focus:border-pink-300" />
                  </div>
                  <span className="text-gray-400">-</span>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">₦</span>
                    <input type="number" placeholder="To" className="w-full border border-gray-200 pl-8 pr-3 py-2 text-sm focus:outline-none focus:border-pink-300" />
                  </div>
                </div>
              </div>

              {collection.subCollections && (
                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Categories</h3>
                  <div className="space-y-3">
                    {collection.subCollections.map(sub => (
                      <label key={sub.name} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500" />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900">{sub.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {products.length === 0 ? (
                 <div className="text-center py-24 text-gray-500">
                   No products found in this collection.
                 </div>
              ) : (
                <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-8">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      imageUrl={product.image}
                      category={product.category}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>


        </div>
      </main>

      <Footer />
      <WhatsAppAIWidget />
    </div>
  );
}
