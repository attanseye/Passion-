import Link from "next/link";
export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FCE7ED] via-[#FDF0F3] to-[#F8DEE6] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/85 backdrop-blur-md p-8 rounded-3xl border border-pink-200 shadow-xl shadow-pink-950/5 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Checkout</h1>
        <p className="text-gray-600 mb-8 text-sm leading-relaxed">
          This is a preview application. Checkout functionality is completed via WhatsApp or Paystack direct invoice.
        </p>
        <Link href="/" className="inline-flex bg-pink-700 text-white px-8 py-3.5 text-xs font-semibold rounded-xl hover:bg-pink-800 transition-colors uppercase tracking-wider shadow-md">
          Return to Store
        </Link>
      </div>
    </div>
  );
}
