
import React from 'react';
import { Product } from '../types';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(255,107,0,0.1)] transition-all duration-500 overflow-hidden border border-orange-100/30 flex flex-col h-full transform hover:-translate-y-2">
      {/* Image & Gradient Overlay */}
      <div className={`h-64 relative overflow-hidden bg-gradient-to-t ${product.gradient} p-4`}>
        <div className="w-full h-full relative overflow-hidden rounded-[2rem] shadow-inner">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700 opacity-90"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
        </div>
        
        <div className="absolute top-8 right-8 bg-gray-900/90 backdrop-blur-md text-white px-4 py-1.5 rounded-2xl font-black text-sm shadow-xl border border-white/10">
          ₱{product.price}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600 mb-1 block">
            {product.category === 'coffee' ? 'Premium Brew' : 'Signature Meal'}
          </span>
          <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>
        
        <div className="mt-8">
          <Button 
            variant="primary" 
            fullWidth 
            onClick={() => onAddToCart(product)}
            className="rounded-2xl h-14 text-sm font-black uppercase tracking-wider shadow-lg shadow-orange-100 group-hover:shadow-orange-200"
          >
            Add To Order <i className="fas fa-arrow-right ml-2 text-[10px]"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};
