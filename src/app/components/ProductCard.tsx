import { Link } from "react-router";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discountPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  brand?: string;
  inStock?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  discountPrice,
  rating,
  reviews,
  image,
  brand,
  inStock = true,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, name, price, image, discountPrice });
  };

  return (
    <Link to={`/product/${id}`} className="block">
      <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-4 h-full flex flex-col">
        {/* Product Image */}
        <div className="relative mb-4 aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded"
          />
          {discountPrice && discountPrice > 0 && (
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
              {discountPrice}% OFF
            </span>
          )}
          {!inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
              <span className="text-white font-semibold">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col">
          {brand && <p className="text-sm text-gray-500 mb-1">{brand}</p>}
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{name}</h3>

          {/* Rating */}
          {/* <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded text-xs">
              <span>{rating}</span>
              <Star className="w-3 h-3 fill-white" />
            </div>
            <span className="text-xs text-gray-500">({reviews})</span>
          </div> */}

          {/* Price */}
          <div className="flex items-center gap-2 mb-3 mt-auto">
            <span className="text-xl font-bold text-gray-900">₹{price.toLocaleString()}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
            )}
          </div>

          {/* Add to Cart Button */}
          {inStock && (
            <button
              onClick={handleAddToCart}
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
