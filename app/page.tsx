export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-semibold mb-4 text-gray-900">
        Welcome to Fake Store
      </h1>

      <p className="text-gray-600 mb-6">
        A simple Next.js project using the DummyJSON API.
      </p>

      {/* <a
        href="/products"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        View Products
      </a> */}
    </div>
  );
}