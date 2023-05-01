import React from 'react';

type SuperButtonPropsType = {
   name: string;
   disabled?: boolean;
   onClick?: () => void;
};


export const SuperButton: React.FC<SuperButtonPropsType> = ({ name, ...props }) => {
   const { disabled } = props;

   return (
      <button
         className={`w-20 h-10 ml-10 bg-white ${disabled ? 'bg-gray-600 text-white' : 'hover:bg-gray-100 active:bg-red-400'}`}
         {...props}
      >
         {name}
      </button>
   );
};