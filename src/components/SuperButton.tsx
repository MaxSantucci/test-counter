import React from 'react';

type ButtonPropsType = {
   name: string;
   disabled?: boolean;
   onClick?: () => void;
};

export const SuperButton: React.FC<ButtonPropsType> = ({ name, disabled = false, onClick }) => {
   return (
      <button className={`w-20 h-10 ml-10 bg-white active:bg-blue-600 ${disabled ? 'bg-gray-400' : 'hover:bg-gray-100 active:bg-gray-200'}`} disabled={disabled} onClick={onClick}>
         {name}
      </button>
   );
};