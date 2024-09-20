import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/index';
import Body from '../../Components/body/index';
const Dashboard = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex-grow h-screen bg-cover bg-center relative ">
      <Header />
      <div className=''>
        {showScrollTop && (
          <div
            onClick={scrollToTop}
            className="fixed bottom-10 left-10 bg-gray-500 text-white rounded-full opacity-75 hover:opacity-100 cursor-pointer p-3 shadow-lg transition-opacity duration-300"
          >
            ⬆️
          </div>
        )}
      </div>
      <Body/>
    </div>
  );
};

export default Dashboard;
