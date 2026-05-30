import { Link, useSearchParams } from "react-router";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mb-4">
          Your payment was completed successfully.
        </p>

        {sessionId && (
          <p className="text-xs text-gray-500 break-all mb-8">
            Session ID: {sessionId}
          </p>
        )}

        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}