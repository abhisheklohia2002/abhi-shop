import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import { products } from "../data/mockData";
import { useCart } from "../context/CartContext";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../http/api";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const {
    data: productById,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(Number(id)),
    enabled: !!id,
  });

  if (isLoading) {
    return <p>Loading product...</p>;
  }

  if (isError) {
    return <p>Failed to load product</p>;
  }

  if (!productById) {
    return <p>Product not found</p>;
  }
  console.log(productById?.data,'productById')

  const product = products.find((p) => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <button onClick={() => navigate("/")} className="text-blue-600 hover:underline">
          Go back to home
        </button>
      </div>
    );
  }

  const images = [product.image, product.image, product.image, product.image];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        discountPrice: product.discount,
      });
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  const reviews = [
    {
      id: 1,
      user: "Rajesh Kumar",
      rating: 5,
      comment: "Excellent product! Very satisfied with the quality and performance.",
      date: "March 15, 2026",
    },
    {
      id: 2,
      user: "Priya Singh",
      rating: 4,
      comment: "Good value for money. Fast delivery and well packaged.",
      date: "March 10, 2026",
    },
    {
      id: 3,
      user: "Amit Patel",
      rating: 5,
      comment: "Highly recommended! Works perfectly as expected.",
      date: "March 5, 2026",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span>/</span>
        <a href={`/products/${product.category}`} className="hover:text-blue-600">
          {product.category}
        </a>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
            <img
              src={productById?.data?.image?? ""}
              alt={product.name}
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-lg overflow-hidden ${
                  selectedImage === index ? "border-blue-600" : "border-gray-200"
                }`}
              >
                <img src={img} alt={`View ${index + 1}`} className="w-full h-20 object-cover" />
              </button>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <button className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" />
              Add to Wishlist
            </button>
            <button className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {product.brand && <p className="text-sm text-gray-500 mb-2">{product.brand}</p>}
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{productById?.data?.name}</h1>

            {/* Rating */}
            {/* <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded">
                <span className="font-semibold">{product.rating}</span>
                <Star className="w-4 h-4 fill-white" />
              </div>
              <span className="text-gray-600">{product.reviews} Reviews</span>
            </div> */}

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-3xl font-bold text-gray-900">
                  ₹{productById?.data.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-green-600 font-semibold">
                      {productById?.data.discountPrice}% OFF
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-600">Inclusive of all taxes</p>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <span className="text-green-600 font-semibold">In Stock</span>
              ) : (
                <span className="text-red-600 font-semibold">Out of Stock</span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity:</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-16 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 flex items-center justify-center gap-2 font-semibold"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold"
              >
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="space-y-3 border-t pt-6">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-gray-600" />
                <span className="text-sm">Free Delivery on orders above ₹500</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-gray-600" />
                <span className="text-sm">7 Days Return & Exchange Policy</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-600" />
                <span className="text-sm">100% Genuine Products</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description and Specifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4">Product Description</h2>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4">Specifications</h2>
          <table className="w-full">
            <tbody>
              {Object.entries(product.specs).map(([key, value], index) => (
                <tr key={key} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="py-3 px-4 font-medium text-gray-700">{key}</td>
                  <td className="py-3 px-4 text-gray-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                  {review.user.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{review.user}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
