import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { categories, products, banners } from "../data/mockData";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredProducts = products.slice(0, 6);
  const dealProducts = products.filter(p => p.discount && p.discount >= 25).slice(0, 4);

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              {banners[currentBanner].title}
            </h1>
            <p className="text-xl mb-8">
              {banners[currentBanner].subtitle}
            </p>
            <Link
              to="/products/all"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              {banners[currentBanner].cta}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentBanner ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
          <img
            src={banners[currentBanner].image}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
          <Link to="/products/all" className="text-blue-600 hover:underline flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition text-center"
            >
              <div className="w-16 h-16 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <h3 className="font-medium text-sm text-gray-900 mb-1">{category.name}</h3>
              <p className="text-xs text-gray-500">{category.count} items</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Deals Section */}
      <section className="bg-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Best Deals</h2>
            <Link to="/products/deals" className="text-blue-600 hover:underline flex items-center gap-1">
              View All Deals <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <Link to="/products/all" className="text-blue-600 hover:underline flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Brand Highlights */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Top Brands</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {["Havells", "Schneider", "Legrand", "Philips", "Crompton", "Polycab", "Siemens", "ABB", "Bajaj", "LG", "Daikin", "Orient", "Syska", "Anchor"].map((brand) => (
              <div
                key={brand}
                className="bg-white rounded-lg p-6 flex items-center justify-center border border-gray-200 hover:shadow-lg transition cursor-pointer"
              >
                <span className="font-semibold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200 flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Quality Guaranteed</h3>
              <p className="text-sm text-gray-600">All products are 100% genuine and certified</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200 flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Best Prices</h3>
              <p className="text-sm text-gray-600">Competitive pricing on all products</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200 flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Quick shipping across India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
