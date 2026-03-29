import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { CartProvider } from "../context/CartContext";

export default function Layout() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
