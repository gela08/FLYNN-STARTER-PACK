
import React from 'react';
import { Product, Flavor } from '../types';
import { FLAVORS } from '../constants';
import { Button } from './Button';

interface FlavorModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSelect: (flavor: Flavor) => void;
}

export const FlavorModal: React.FC<FlavorModalProps> = ({ product, isOpen, onClose, onSelect }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal content */}
      <div className="relative bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6 bg-orange-600 text-white flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Pick Your Flavor</h2>
            <p className="text-orange-100 text-sm opacity-90">{product.name}</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            {FLAVORS.map((flavor) => (
              <button
                key={flavor.name}
                onClick={() => onSelect(flavor)}
                className="group p-4 rounded-2xl border-2 border-orange-50 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 text-left relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h4 className="font-bold text-gray-800 group-hover:text-orange-700 transition-colors">
                    {flavor.name}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">
                    {flavor.price > 0 ? `+₱${flavor.price}` : 'Free'}
                  </p>
                </div>
                <div className="absolute -right-2 -bottom-2 opacity-5 group-hover:opacity-10 transition-opacity">
                   <i className="fas fa-drumstick-bite text-4xl transform -rotate-12"></i>
                </div>
              </button>
            ))}
          </div>
          
          <div className="mt-6">
            <Button variant="ghost" fullWidth onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
