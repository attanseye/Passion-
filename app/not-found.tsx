import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Not Found</h2>
      <p className="text-gray-600 mb-6">Could not find requested resource</p>
      <Link href="/" className="bg-pink-600 text-white px-6 py-2 rounded">
        Return Home
      </Link>
    </div>
  );
}
