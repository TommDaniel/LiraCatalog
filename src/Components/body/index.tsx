import React from 'react';
import User from '../../assets/user.png'
const Body = () => {
  return (
    <div className='h-1/2 w-full z-10 flex flex-col items-center gap-10 text-center'>
      <div className="w-auto h-16 font-bodoni text-4xl text-white text-center pt-4"> <img src={User} alt="Foto Maíra" className='rounded-full'/></div>
    </div>
  );
};

export default Body;
