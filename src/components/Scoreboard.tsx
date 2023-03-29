import React from 'react';

type ScoreboardPropsType = {
   count: number
   maxValue: number
}

export const Scoreboard: React.FC<ScoreboardPropsType> = ({count, maxValue}) => {
   return (
      <div className={count === maxValue ? 'text-red-500' : ''}>
         <div className="p-16 font-bold border-2 border-blue-600 text-center">
            {count}
         </div>
      </div>
   );
};