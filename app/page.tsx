import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-6 bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100">

        {/* Hero Section */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-serif">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">SwiftBuy</span>
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            A modern e-commerce storefront built with Next.js App Router, Tailwind CSS, and global state management.
          </p>
        </div>

        {/* Call to Action */}
        <div className="w-full sm:w-auto pt-2">
          <Link 
            href="/products" 
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow hover:shadow-md transition-all duration-200 text-center flex items-center justify-center gap-2"
          >
            Browse Products 🛍️
          </Link>
        </div>

        {/* CV Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 mt-4 border-t border-gray-100 w-full">
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-lg mb-1">
              ⚡
            </div>
            <h3 className="font-bold text-gray-900 text-sm">Fast SSR</h3>
            <p className="text-xs text-gray-500 leading-tight">Server-rendered pages for optimal SEO and instant load times.</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="h-10 w-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-lg mb-1">
              🔀
            </div>
            <h3 className="font-bold text-gray-900 text-sm">Dynamic Routing</h3>
            <p className="text-xs text-gray-500 leading-tight">Advanced optional catch-all routes powering seamless navigation.</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="h-10 w-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-lg mb-1">
              🛒
            </div>
            <h3 className="font-bold text-gray-900 text-sm">Global State</h3>
            <p className="text-xs text-gray-500 leading-tight">React Context API managing real-time cart updates and quantities.</p>
          </div>
        </div>

      </div>
    </div>
  );
}