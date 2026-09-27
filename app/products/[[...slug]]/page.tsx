import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import { Product } from "@/context/Context";

export default async function ProductsPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const proCategory = slug?.[0];
  const proId = slug?.[1];
  const pro = proId ? `https://fakestoreapi.com/products/${proId}` : "";
  const proResponse = pro ? await fetch(pro) : null;
  const prodetail: Product = proResponse ? await proResponse.json() : null;
  const fetchdata = proCategory && proCategory !== "categories"
    ? `https://fakestoreapi.com/products/category/${proCategory}`
    : "https://fakestoreapi.com/products";
  const response = await fetch(fetchdata);
  const products: Product[] = await response.json();
  const productcategory = await fetch("https://fakestoreapi.com/products/categories");
  const showCat = await productcategory.json();
  if (prodetail) {
    return (
      <div className="max-w-5xl mx-auto p-6 text-gray-800">
        <div className="flex gap-3 mb-8 text-sm font-medium">
          <Link href="/products" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition rounded-lg">← All Products</Link>
          <Link href={`/products/${prodetail.category}`} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition rounded-lg capitalize">
            {prodetail.category}
          </Link>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border p-8 flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 rounded-xl p-4">
            <img src={prodetail.image} alt={prodetail.title} className="max-h-96 object-contain mix-blend-multiply" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-semibold text-blue-600 uppercase mb-2">{prodetail.category}</span>
            <h1 className="text-3xl font-bold mb-4">{prodetail.title}</h1>
            <span className="text-4xl font-extrabold mb-6">${prodetail.price}</span>
            <p className="text-gray-600 leading-relaxed mb-8">{prodetail.description}</p>         
            <AddToCartButton product={prodetail} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto p-6 font-sans">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 pb-6 border-b">
        <h1 className="text-3xl font-bold capitalize">
          {proCategory && proCategory !== "categories" ? proCategory : "All Products"}
        </h1>
        <Link href="/products/categories" className="bg-gray-900 text-white hover:bg-gray-800 transition px-5 py-2.5 rounded-lg text-sm font-semibold mt-4 md:mt-0">
          Browse Categories
        </Link>
      </div>

      {proCategory === "categories" && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {showCat.map((cat: string) => (
            <Link key={cat} href={`/products/${cat}`}>
              <div className="bg-white border p-6 rounded-xl text-center hover:border-blue-500 shadow-sm capitalize font-semibold transition">
                {cat}
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products?.map((p) => (
          <div key={p.id} className="bg-white flex flex-col rounded-2xl shadow-sm border hover:shadow-xl transition-shadow p-5 group h-full">
            
            {/* Image links to specific category */}
            <Link href={`/products/${p.category}`} className="relative h-48 mb-4 flex justify-center items-center">
              <img src={p.image} alt={p.title} className="h-full object-contain group-hover:scale-105 transition-transform duration-300" />
            </Link>
            
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{p.category}</span>
            <h2 className="text-sm font-semibold line-clamp-2 mb-2 min-h-[40px]">{p.title}</h2>
            <span className="text-xl font-bold mb-4">${p.price}</span>
            
            {/* Action Buttons Container */}
            <div className="mt-auto flex flex-col gap-2">
              <Link 
                href={`/products/${p.category}/${p.id}`} 
                className="w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2.5 px-4 rounded-xl transition shadow-sm"
              >
                View Details
              </Link>
              <AddToCartButton product={p} />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}