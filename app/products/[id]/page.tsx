import { ALL_PRODUCTS, getProductImage } from '@/lib/data';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppAIWidget } from '@/components/WhatsAppAIWidget';
import { ZoomableImage } from '@/components/ZoomableImage';
import { ProductCard } from '@/components/ProductCard';
import { PriceDropButton } from '@/components/PriceDropButton';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const product = ALL_PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    notFound();
  }

  const recommendations = ALL_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const placeholderImage = product.image || getProductImage(product.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FCE7ED] via-[#FDF0F3] to-[#F8DEE6] text-gray-900">
      <div className="bg-pink-600 text-white text-xs font-medium tracking-wide py-2 text-center">
        Nationwide delivery available across Nigeria – Fast and Secure
      </div>
      
      <Header />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white/75 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-pink-200/80 shadow-xl shadow-pink-950/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {/* Images Section */}
          <div className="flex flex-col gap-4">
            <ZoomableImage src={placeholderImage} alt={product.name} />
            <div className="grid grid-cols-4 gap-4">
               {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative aspect-square w-full bg-gray-50 rounded-md border border-gray-100 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center p-1">
                     <Image
                        src={placeholderImage}
                        alt={`${product.name} view ${i}`}
                        fill
                        sizes="25vw"
                        className="object-contain p-1 object-center"
                        referrerPolicy="no-referrer"
                     />
                  </div>
               ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col">
            {product.category && (
              <p className="text-xs text-gray-500 tracking-wider uppercase mb-3">
                {product.category}
              </p>
            )}
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-gray-900 mb-8">
              {product.price}
            </p>

            <div className="prose prose-sm text-gray-600 mb-8 max-w-none font-light leading-relaxed">
              <p>
                Experience premium quality with our {product.name.toLowerCase()}. 
                Designed for salon professionals and beauty enthusiasts who demand the best. 
                This product delivers exceptional results, ensuring satisfaction with every use.
              </p>
              <ul className="mt-4 space-y-2">
                 <li>Professional-grade formulation</li>
                 <li>Used in top salons across Nigeria</li>
                 <li>Authentic and guaranteed quality</li>
                 <li>Fast nationwide shipping available</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 mb-12 border-y border-gray-100 py-8">
              <button className="w-full bg-pink-600 text-white px-8 py-4 text-sm font-medium hover:bg-pink-700 transition-colors shadow-sm flex justify-center items-center gap-2">
                Add to Cart
              </button>
              <button className="w-full bg-white text-gray-900 border border-gray-200 px-8 py-4 text-sm font-medium hover:bg-gray-50 transition-colors flex justify-center items-center gap-2">
                Buy it now
              </button>
              <PriceDropButton />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">Details</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  Imported directly from trusted manufacturers. 
                  Suitable for all professional applications. For detailed instructions 
                  and best practices, please refer to the packaging.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">Shipping & Returns</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  We offer fast delivery nationwide within 2-5 business days. 
                  Our return policy allows for returns within 7 days of receipt for unopened and unused items.
                </p>
              </div>
            </div>

          </div>
        </div>
        </div>

        {/* Recommended for You Section */}
        {recommendations.length > 0 && (
          <div className="mt-24 pt-16 border-t border-gray-100">
             <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">
                Recommended for You
              </h2>
               <div className="h-1 w-16 bg-pink-600 mt-4"></div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
              {recommendations.map((rec) => (
                <ProductCard
                  key={rec.id}
                  id={rec.id}
                  name={rec.name}
                  price={rec.price}
                  imageUrl={rec.image}
                  category={rec.category}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppAIWidget />
    </div>
  );
}
