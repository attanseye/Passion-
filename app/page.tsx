import { ProductCard } from '@/components/ProductCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppAIWidget } from '@/components/WhatsAppAIWidget';
import { ALL_PRODUCTS, CATALOG } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Scissors, 
  ArrowRight, 
  Star, 
  Award, 
  PhoneCall,
  CheckCircle2 
} from 'lucide-react';

export default function Home() {
  // Curated showcase of top salon favorites & hair extension icons
  const trendingProductIds = [
    'lush-ready-braid',
    'lush-wow-braid',
    'lush-jumbo-braid',
    'lush-bouncy-wave',
    'lush-sasha-locs',
    'p-choice-wax',
    'apple-avocado-hair-food-750g',
    'lush-bone-straight-pony'
  ];

  const featuredProducts = trendingProductIds
    .map(id => ALL_PRODUCTS.find(p => p.id === id))
    .filter((p): p is (typeof ALL_PRODUCTS)[number] => Boolean(p));

  // Fallback to first 8 products if matching fails
  const displayProducts = featuredProducts.length === 8 ? featuredProducts : ALL_PRODUCTS.slice(0, 8);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#FCE7ED] via-[#FDF0F3] to-[#F8DEE6] text-gray-900 selection:bg-pink-300 selection:text-pink-950">
      {/* Ambient Visual Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        {/* Top-right vibrant rose/peony glow */}
        <div className="absolute -top-32 right-[-10%] w-[750px] h-[750px] rounded-full bg-gradient-to-br from-pink-400/35 via-rose-300/30 to-amber-200/20 blur-[120px]" />
        
        {/* Top-left warm peach-gold glow */}
        <div className="absolute -top-20 left-[-15%] w-[680px] h-[680px] rounded-full bg-gradient-to-br from-amber-200/40 via-pink-300/30 to-rose-200/25 blur-[130px]" />
        
        {/* Mid-page radiant peony orb */}
        <div className="absolute top-[34%] -right-24 w-[780px] h-[780px] rounded-full bg-gradient-to-tl from-rose-300/35 via-pink-200/35 to-transparent blur-[140px]" />
        
        {/* Mid-page left lavender/warm blush orb */}
        <div className="absolute top-[58%] -left-32 w-[720px] h-[720px] rounded-full bg-gradient-to-tr from-pink-400/25 via-rose-200/35 to-amber-100/30 blur-[130px]" />

        {/* Bottom ambient warmth */}
        <div className="absolute bottom-0 right-1/4 w-[900px] h-[600px] rounded-full bg-gradient-to-t from-pink-300/30 via-rose-200/25 to-transparent blur-[150px]" />
        
        {/* Delicate organic silk wave pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.055] text-pink-900" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="silk-wave-pattern" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(25)">
              <path d="M 0 40 Q 20 20 40 40 T 80 40" fill="none" stroke="currentColor" strokeWidth="1.3" />
              <path d="M 0 80 Q 20 60 40 80 T 80 80" fill="none" stroke="currentColor" strokeWidth="1.3" />
              <circle cx="40" cy="40" r="1.5" fill="currentColor" />
              <circle cx="80" cy="80" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#silk-wave-pattern)" />
        </svg>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Announcement Bar */}
        <div className="bg-gradient-to-r from-pink-950 via-pink-900 to-pink-950 text-white text-xs font-medium tracking-widest uppercase py-2.5 text-center px-4 sm:px-6 lg:px-8 overflow-hidden relative shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse opacity-50" />
          <p className="relative animate-in fade-in slide-in-from-bottom-2 duration-700 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-pink-300 inline" />
            <span>FREE NATIONWIDE DELIVERY ON ORDERS OVER ₦50,000 | 100% GENUINE SALON SUPPLIES</span>
            <Sparkles className="w-3.5 h-3.5 text-pink-300 inline hidden sm:inline" />
          </p>
        </div>

        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-10 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/90 via-pink-50/70 to-rose-100/50 border border-pink-200/60 shadow-xl shadow-pink-900/5 backdrop-blur-md">
                
                {/* Decorative glow inside hero card */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 p-8 sm:p-12 lg:p-16">
                  {/* Left Column: Text & CTA */}
                  <div className="lg:col-span-7 z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/90 border border-pink-200/80 text-pink-900 text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs">
                      <Award className="w-3.5 h-3.5 text-pink-700" />
                      Authentic Nigerian Salon Supplies & Extensions
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-pink-950 mb-6 leading-[1.12]">
                      Unlock Your <br />
                      <span className="italic font-serif font-normal text-pink-700 bg-gradient-to-r from-pink-800 via-pink-700 to-rose-600 bg-clip-text text-transparent">
                        Best Hair Artistry.
                      </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-700 font-medium mb-8 max-w-lg leading-relaxed">
                      Lush Hair Extensions, Apple Cosmetics & professional salon-grade tools trusted by Nigeria&apos;s leading braiders and stylists.
                    </p>

                    {/* Feature Micro-Badges */}
                    <div className="flex flex-wrap gap-4 mb-8 text-xs font-medium text-gray-600">
                      <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-md border border-pink-100 shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-600" /> 100% Kanekalon Fibre
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-md border border-pink-100 shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-600" /> Pre-Stretched & Feathered
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-md border border-pink-100 shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-600" /> Wholesale & Retail Ready
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link 
                        href="/collections/Lush%20Products" 
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-700 to-pink-800 hover:from-pink-800 hover:to-pink-900 text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase rounded-xl shadow-lg shadow-pink-900/20 hover:shadow-xl hover:shadow-pink-900/30 transition-all duration-300"
                      >
                        Shop Lush Braids
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link 
                        href="/collections/Hair%20Cosmetics%2C%20Care%2C%20%26%20Styling%20Products" 
                        className="inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-pink-900 border border-pink-200 px-7 py-4 text-sm font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 shadow-xs"
                      >
                        Salon Care & Waxes
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Hero Beauty Model Showcase */}
                  <div className="lg:col-span-5 relative flex items-center justify-center">
                    {/* Glowing ambient aura */}
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-pink-300/40 via-rose-200/30 to-amber-100/30 blur-2xl pointer-events-none" />
                    
                    <div className="relative w-full max-w-[380px] sm:max-w-[420px] h-[400px] sm:h-[480px] rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-white/95 via-pink-50/60 to-white/95 shadow-2xl shadow-pink-950/15 border border-pink-200/80 group">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src="/hero-model-extensions.jpg"
                          alt="Lush Hair Extensions Collection - Model Showcase"
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                          priority
                          referrerPolicy="no-referrer"
                        />
                        {/* Soft subtle gradient overlay at base for contrast with badge */}
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />
                      </div>

                      {/* Floating Stylist Choice Badge */}
                      <div className="absolute bottom-5 left-4 right-4 sm:left-auto sm:right-5 bg-white/95 backdrop-blur-md border border-pink-200/90 rounded-2xl p-3.5 shadow-xl shadow-pink-950/15 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-600 to-rose-700 flex items-center justify-center text-white shadow-xs">
                          <Sparkles className="w-5 h-5 text-amber-200" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <p className="text-xs font-bold text-gray-900">Salon-Grade Extensions</p>
                            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          </div>
                          <p className="text-[11px] text-pink-700 font-semibold">Lush 100% Quality Hair</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Grid (Circle Style with Frosted Elevated Panel) */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="bg-white/75 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-pink-100/80 shadow-lg shadow-pink-950/5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-4 border-b border-pink-100/60 gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-pink-700 block mb-1">
                    Signature Selections
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Explore Salon Collections
                  </h2>
                </div>
                <p className="text-xs text-gray-500 max-w-xs">
                  Discover braiding hair, salon cosmetics, hair foods, and pro styling equipment.
                </p>
              </div>

              <div className="flex overflow-x-auto pb-4 gap-6 sm:gap-8 lg:gap-10 md:justify-center items-start snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {CATALOG.map((collection) => (
                  <Link 
                    href={`/collections/${encodeURIComponent(collection.name)}`}
                    key={collection.name} 
                    className="snap-start group flex flex-col items-center gap-3 text-center w-24 sm:w-28 lg:w-32 flex-shrink-0"
                  >
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gradient-to-tr from-pink-50 to-white border-2 border-pink-200/70 group-hover:border-pink-600 group-hover:shadow-lg group-hover:shadow-pink-500/20 transition-all duration-300 p-1">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                        <Image 
                          src={collection.image}
                          alt={collection.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-115"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xs sm:text-sm text-gray-900 group-hover:text-pink-700 transition-colors line-clamp-2 leading-snug">
                      {collection.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Products Collection */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="bg-white/75 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-pink-200/80 shadow-xl shadow-pink-950/5">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-pink-100/70 gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-pink-700 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-pink-600" />
                    Curated Best-Sellers
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                    Trending Now
                  </h2>
                  <p className="text-sm text-gray-600 mt-1 max-w-md">
                    Hand-selected premium hair extensions, nourishing hair foods, and salon-grade edge styling.
                  </p>
                </div>

                <Link 
                  href="/collections/Lush%20Products"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-700 hover:text-pink-800 transition-colors group"
                >
                  <span>View Full Catalog</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
                {displayProducts.map((product) => (
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
            </div>
          </section>

          {/* Two Column Promo Editorial Banners */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Promo Card 1: Salon Styling */}
              <div className="relative h-[420px] md:h-[500px] group overflow-hidden rounded-3xl bg-gradient-to-br from-pink-950 via-rose-950 to-gray-950 border border-pink-900/40 shadow-xl shadow-pink-950/20">
                <div className="absolute inset-0 p-8 flex items-center justify-center">
                  <div className="relative w-3/4 h-3/4 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Image 
                      src="/products/passhionate/Choice wax.png"
                      alt="Choice Wax Professional Styling"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-108 drop-shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
                <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-pink-300 mb-2">
                    Salon Professional
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                    Professional Waxes & Edge Control
                  </h3>
                  <p className="text-white/80 mb-6 max-w-sm text-sm">
                    Above Edge Wax, Choice Wax, and styling gels formulated for sleek, flake-free, all-day holds.
                  </p>
                  <div>
                    <Link 
                      href="/collections/Hair%20Cosmetics%2C%20Care%2C%20%26%20Styling%20Products" 
                      className="inline-flex items-center gap-2 bg-white text-pink-950 px-6 py-3 text-sm font-semibold hover:bg-pink-50 transition-colors uppercase tracking-wider rounded-xl shadow-md"
                    >
                      Shop Waxes
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Promo Card 2: Lush Hair Extensions */}
              <div className="relative h-[420px] md:h-[500px] group overflow-hidden rounded-3xl bg-gradient-to-br from-rose-950 via-purple-950 to-gray-950 border border-pink-900/40 shadow-xl shadow-pink-950/20">
                <div className="absolute inset-0 p-8 flex items-center justify-center">
                  <div className="relative w-3/4 h-3/4 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Image 
                      src="/products/lush/Bouncy Wave.png"
                      alt="Lush Bouncy Wave Extensions"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-108 drop-shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
                <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-pink-300 mb-2">
                    Lush Collections
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                    Premium Braids & Extensions
                  </h3>
                  <p className="text-white/80 mb-6 max-w-sm text-sm">
                    Authentic Wow Braid, Jumbo Braid, Bouncy Wave, Sasha Locs, and Bone Straight Ponytails.
                  </p>
                  <div>
                    <Link 
                      href="/collections/Lush%20Products" 
                      className="inline-flex items-center gap-2 bg-white text-pink-950 px-6 py-3 text-sm font-semibold hover:bg-pink-50 transition-colors uppercase tracking-wider rounded-xl shadow-md"
                    >
                      Shop Extensions
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Salon Professional & Wholesale Spotlight Banner */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-900 via-pink-800 to-rose-900 text-white p-8 sm:p-12 shadow-xl shadow-pink-950/15">
              <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
                <div className="lg:col-span-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-pink-200 text-xs font-semibold uppercase tracking-wider mb-3">
                    <Scissors className="w-3.5 h-3.5" />
                    Salon Supply Specialists
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                    Equipping Nigeria&apos;s Elite Hair Stylists & Salons
                  </h3>
                  <p className="text-pink-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                    Need bulk carton rates on Lush Braids, Apple Hair Food, hot combs, or professional salon tools? Get direct salon discount tiers and guaranteed authentic supplies delivered straight to your door.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Link
                    href="/collections/Lush%20Products"
                    className="inline-flex items-center justify-center gap-2 bg-white text-pink-900 hover:bg-pink-50 px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md text-center"
                  >
                    Order Salon Stock
                  </Link>
                  <a
                    href="https://wa.me/2348068682568?text=Hello%20Passhionate%20Beauty,%20I%20am%20interested%20in%20salon%20wholesale%20supplies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-pink-950/60 hover:bg-pink-950/80 border border-pink-400/30 text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all text-center"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    WhatsApp Salon Desk
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Brand USPs (Elevated Frosted Glass Cards) */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* USP 1 */}
              <div className="bg-white/80 backdrop-blur-md border border-pink-100/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-pink-100/80 text-pink-700 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-pink-700 group-hover:text-white transition-all">
                  <Truck className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1.5 uppercase tracking-wide text-xs">
                  Nationwide Dispatch
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Fast, insured shipping across Lagos and all 36 states with reliable doorstep delivery.
                </p>
              </div>

              {/* USP 2 */}
              <div className="bg-white/80 backdrop-blur-md border border-pink-100/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-pink-100/80 text-pink-700 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-pink-700 group-hover:text-white transition-all">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1.5 uppercase tracking-wide text-xs">
                  100% Authentic Guarantee
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Direct sourcing from verified Lush, Apple, and professional salon manufacturers.
                </p>
              </div>

              {/* USP 3 */}
              <div className="bg-white/80 backdrop-blur-md border border-pink-100/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-pink-100/80 text-pink-700 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-pink-700 group-hover:text-white transition-all">
                  <Scissors className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1.5 uppercase tracking-wide text-xs">
                  Salon Professional Pricing
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Competitive retail prices and discounted carton tier pricing for working stylists.
                </p>
              </div>

              {/* USP 4 */}
              <div className="bg-white/80 backdrop-blur-md border border-pink-100/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-pink-100/80 text-pink-700 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-pink-700 group-hover:text-white transition-all">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1.5 uppercase tracking-wide text-xs">
                  Expert Hair Assistance
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Consult our beauty team anytime for shade matching, braid bundle counts, and care tips.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppAIWidget />
      </div>
    </div>
  );
}
