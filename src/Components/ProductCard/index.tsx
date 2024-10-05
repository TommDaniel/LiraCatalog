import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-vermelho-escuro">{product.name}</h2>
        <p className="text-marrom">{product.description}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
