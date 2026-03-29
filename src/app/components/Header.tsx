import { Link } from "react-router";
import { Search, ShoppingCart, User, Menu, Heart, MapPin } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Header() {
  const { getTotalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Deliver to: Mumbai 400001</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:underline">Become a Seller</a>
            <a href="#" className="hover:underline">Help & Support</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">ABHI</div>
              <div className="text-xs text-gray-600 -mt-1">Electric Shop</div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for switches, MCB, AC, fans, wires and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-0 top-0 bottom-0 px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-6">
            <button className="flex flex-col items-center gap-1 hover:text-blue-600">
              <User className="w-6 h-6" />
              <span className="text-xs">Login</span>
            </button>

            <button className="flex flex-col items-center gap-1 hover:text-blue-600">
              <Heart className="w-6 h-6" />
              <span className="text-xs">Wishlist</span>
            </button>

            <Link to="/cart" className="flex flex-col items-center gap-1 hover:text-blue-600 relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="text-xs">Cart</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-8 py-3">
            <button className="flex items-center gap-2 hover:text-blue-600">
              <Menu className="w-5 h-5" />
              <span>All Categories</span>
            </button>
            <Link to="/products/switches" className="hover:text-blue-600">Switches</Link>
            <Link to="/products/mcb" className="hover:text-blue-600">MCB</Link>
            <Link to="/products/ac" className="hover:text-blue-600">Air Conditioners</Link>
            <Link to="/products/fans" className="hover:text-blue-600">Fans</Link>
            <Link to="/products/lighting" className="hover:text-blue-600">LED Lights</Link>
            <Link to="/products/wires" className="hover:text-blue-600">Wires & Cables</Link>
            <Link to="/products/appliances" className="hover:text-blue-600">Appliances</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
