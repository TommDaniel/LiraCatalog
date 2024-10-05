import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ProductCard from '../../Components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Mesa de Madeira',
    image: '/assets/products/mesa.jpg',
    description: 'Mesa artesanal feita de madeira maciça.',
  },
  {
    id: 2,
    name: 'Cadeira Rústica',
    image: '/assets/products/cadeira.jpg',
    description: 'Cadeira confortável com design rústico.',
  },
  {
    id: 3,
    name: 'Cadeira Rústica',
    image: '/assets/products/cadeira.jpg',
    description: 'Cadeira confortável com design rústico.',
  },
  {
    id: 4,
    name: 'Cadeira Rústica',
    image: '/assets/products/cadeira.jpg',
    description: 'Cadeira confortável com design rústico.',
  },
  {
    id: 5,
    name: 'Cadeira Rústica',
    image: '/assets/products/cadeira.jpg',
    description: 'Cadeira confortável com design rústico.',
  },
  {
    id: 6,
    name: 'Cadeira Rústica',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Cadeira confortável com design rústico.',
  },
  {
    id: 7,
    name: 'Cadeira Rústica',
    image: '/assets/products/cadeira.jpg',
    description: 'Cadeira confortável com design rústico.',
  },
  // Adicione mais produtos conforme necessário
];

const Catalog: React.FC = () => {
  return (
    <div className="bg-textura-madeira bg-cover bg-center min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
