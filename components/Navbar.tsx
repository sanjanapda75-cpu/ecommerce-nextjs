// components/Navbar.tsx

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand */}
        <a href="/" className="text-2xl font-semibold text-gray-800 tracking-tight">
          Fakestore
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-gray-700">
          <a href="/products" className="hover:text-black transition">All Products</a>

          <a
            href="/products/new"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition"
          >
            Add Product
          </a>
        </nav>
      </div>
    </header>
  );
}