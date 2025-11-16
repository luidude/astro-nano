import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

export default function ProductNote() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 129.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      description: "Premium sound quality with active noise cancellation. Up to 30 hours of battery life.",
      inStock: true,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Leather Backpack",
      price: 89.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      description: "Durable genuine leather backpack with multiple compartments. Perfect for daily use.",
      inStock: true,
      category: "Fashion"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 249.99,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      description: "Track your fitness goals with advanced health monitoring features.",
      inStock: false,
      category: "Electronics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">Featured Products</h1>
        <p className="text-slate-600 mb-8">Discover our curated selection of premium items</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {!product.inStock && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Out of Stock
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">({product.rating})</span>
                </div>

                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-slate-800">
                      ${product.price}
                    </span>
                  </div>
                  <button 
                    disabled={!product.inStock}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                      product.inStock 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart size={18} />
                    {product.inStock ? 'Add' : 'Unavailable'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}