import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { CartProvider } from "../context/CartContext";
import { useQuery } from "@tanstack/react-query";
import { self } from "../../http/api";


export default function Layout() {
  const {
    data: user,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["self"],
    queryFn: self,
    retry:true,
  });

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header user={user} refetchSelf={refetch} />

        <main className="flex-1">
          <Outlet context={{ user, isLoading, refetchSelf: refetch }} />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}