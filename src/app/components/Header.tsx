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
              <span className="texAll Categoriest-sm">
                Deliver to: Mumbai 400001
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:underline">
              Become a Seller
            </a>
            <a href="#" className="hover:underline">
              Help & Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          {/* Top row on mobile: Logo + Action Buttons */}
          <div className="flex items-center justify-between gap-4 lg:justify-start">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                </svg>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">
                  ABHI
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 -mt-1">
                  Electric Shop
                </div>
              </div>
            </Link>

            {/* Action Buttons */}
           
          </div>

          {/* Search Bar */}
          <div className="w-full flex-1 lg:max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for switches, MCB, AC, fans, wires and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-2.5 pl-4 pr-12 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-0 top-0 bottom-0 rounded-r-lg bg-blue-600 px-4 text-white hover:bg-blue-700">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
           <div className="flex items-center gap-3 sm:gap-5 lg:gap-6">
              <button className="flex flex-col items-center gap-1 hover:text-blue-600">
                <User className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-[10px] sm:text-xs">Login</span>
              </button>

              <button className="flex flex-col items-center gap-1 hover:text-blue-600">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-[10px] sm:text-xs">Wishlist</span>
              </button>

              <Link
                to="/cart"
                className="relative flex flex-col items-center gap-1 hover:text-blue-600"
              >
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-[10px] sm:text-xs">Cart</span>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-4 md:gap-8 py-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <button className="flex items-center gap-2 hover:text-blue-600 flex-shrink-0">
              <Menu className="w-5 h-5" />
              <span>All Categories</span>
            </button>

            <Link
              to="/products/switches"
              className="hover:text-blue-600 flex-shrink-0"
            >
              Switches
            </Link>
            <Link
              to="/products/mcb"
              className="hover:text-blue-600 flex-shrink-0"
            >
              MCB
            </Link>
            <Link
              to="/products/ac"
              className="hover:text-blue-600 flex-shrink-0"
            >
              Air Conditioners
            </Link>
            <Link
              to="/products/fans"
              className="hover:text-blue-600 flex-shrink-0"
            >
              Fans
            </Link>
            <Link
              to="/products/lighting"
              className="hover:text-blue-600 flex-shrink-0"
            >
              LED Lights
            </Link>
            <Link
              to="/products/wires"
              className="hover:text-blue-600 flex-shrink-0"
            >
              Wires & Cables
            </Link>
            <Link
              to="/products/appliances"
              className="hover:text-blue-600 flex-shrink-0"
            >
              Appliances
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
