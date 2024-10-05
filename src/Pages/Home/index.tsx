import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Home: React.FC = () => {
  return (
    <div className="relative bg-textura-madeira bg-cover bg-center min-h-screen flex flex-col">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <Header />
      <main className="flex-grow p-4 flex flex-col items-center justify-center text-center relative z-10">
        <h2 className="text-4xl font-bold font-marriweather text-white mb-4">
          Bem-vindo à Lira Rústicos
        </h2>
        <p className="text-xl font-marriweather text-white mb-6">
          Confira nosso catálogo de produtos rústicos e artesanais.
        </p>
        <Link
          to="/catalog"
        >
          <Button variant="contained" color="primary" size="large">
            Ver Catálogo
          </Button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
