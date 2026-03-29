import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                </svg>
              </div>
              <div className="text-xl font-bold text-white">ABHI Electric</div>
            </div>
            <p className="text-sm mb-4">
              Your trusted partner for all electrical and electronic needs. Quality products, competitive prices, and excellent service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white hover:underline">Home</Link></li>
              <li><Link to="/products/all" className="hover:text-white hover:underline">Shop</Link></li>
              <li><a href="#" className="hover:text-white hover:underline">About Us</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Contact</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Track Order</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Become a Seller</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Payment Methods</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Electric Street, Mumbai, Maharashtra - 400001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>support@abhielectric.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm mb-2">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2026 ABHI Electric. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <span>We Accept:</span>
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-gray-800 rounded">Visa</div>
              <div className="px-3 py-1 bg-gray-800 rounded">Mastercard</div>
              <div className="px-3 py-1 bg-gray-800 rounded">UPI</div>
              <div className="px-3 py-1 bg-gray-800 rounded">COD</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
