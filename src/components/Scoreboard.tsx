import React from 'react';

type ScoreboardPropsType = {
   count: number
   max: number
   start: number
   error?: string;
}

export const Scoreboard: React.FC<ScoreboardPropsType> = ({count, max, start, error}) => {
   return (
      <div className={count === max ? 'text-red-500' : ''}>
         {error !== ''
            ? <div className="p-10 border-2 border-blue-600 text-center text-red-500">{error}</div>
            : <div className="p-16 font-bold border-2 border-blue-600 text-center">{count}</div>
         }
      </div>
   );
};

