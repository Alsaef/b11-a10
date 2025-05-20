import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleLoginButton = ({ onClick }) => {
  return (
  <div className='my-4'>
      <button 
      onClick={onClick}
      className="btn btn-outline w-full flex items-center gap-2"
    >
      <FcGoogle size={20} />
      Continue with Google
    </button>
  </div>
  );
};

export default GoogleLoginButton;
