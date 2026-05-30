import { Link, useSearchParams } from "react-router";
import { XCircle } from "lucide-react";

export default function PaymentCancelPage() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
          <XCircle className="w-12 h-12 text-red-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Payment Cancelled
        </h1>

        <p className="text-gray-600 mb-4">
          Your payment was cancelled. You can try again.
        </p>

        {orderId && (
          <p className="text-sm text-gray-500 mb-8">
            Order ID: {orderId}
          </p>
        )}

        <Link
          to="/cart"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 font-semibold"
        >
          Back to Cart
        </Link>
      </div>
    </div>
  );
}