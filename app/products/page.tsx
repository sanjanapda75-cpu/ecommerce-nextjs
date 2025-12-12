export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.products.map((product: any) => (
          <a
            key={product.id}
            href={`/products/${product.id}`}
            className="bg-white rounded-lg shadow p-4 transition hover:shadow-md"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-contain mb-3"
            />

            <h2 className="font-medium text-gray-800">{product.title}</h2>
            <p className="text-blue-600 font-semibold mt-1">${product.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
}