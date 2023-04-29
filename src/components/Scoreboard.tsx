import React, {useEffect, useState} from 'react';

type ScoreboardPropsType = {
   count: number
   max: number
   error: string;
   input: string
   isHasNewValue: boolean
}

export const Scoreboard: React.FC<ScoreboardPropsType> = ({count, max, error, isHasNewValue}) => {

   return (
      <div>
         {isHasNewValue && !error ? <div className="p-3 text-1xl border-2 border-blue-600 text-center">Enter values and press 'set'</div> :
            <div className={count === max ? 'text-red-500' : ''}>
               {error
                  ? <div className="p-10 border-2 border-blue-600 text-center text-red-500">{error}</div>
                  : <div className="p-16 font-bold border-2 border-blue-600 text-center">
                     {count}
                  </div>
               }
            </div>}
      </div>
   );
};


