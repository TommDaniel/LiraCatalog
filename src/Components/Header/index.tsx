import React from 'react';

const Header = () => {
  return (
    <div
      className="h-1/2 w-full bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519606247872-0440aae9b827?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="absolute inset-0 bg-bgHeader opacity-65"></div>
      <div className='relative z-10 flex flex-col items-center gap-10 text-center'>
        <div className="w-auto h-16 font-bodoni text-4xl text-white text-center border-y-4 border-x-0 border-double pt-4">Lira Rústicos</div>
        <div className="font-marriweather text-white text-base">
          Há 30 anos fabricando móveis rústicos e planejados
        </div>
      </div>
    </div>
  );
};

export default Header;
