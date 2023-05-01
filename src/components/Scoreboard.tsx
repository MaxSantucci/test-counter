import React from 'react';
import {useAppSelector} from "../redux/store";
import {selectCounterSettings} from "../redux/counterSettings/selector";
import {selectCounter, selectError} from "../redux/counter/selector";

type ScoreboardPropsType = {
   isHasNewValue: boolean
}

export const Scoreboard: React.FC<ScoreboardPropsType> = ({isHasNewValue}) => {
   const counterSettings = useAppSelector(selectCounterSettings)
   const error = useAppSelector(selectError)
   let count = useAppSelector(selectCounter)

   return (
      <div>
         {isHasNewValue && !error ? <div className="p-3 text-1xl border-2 border-blue-600 text-center">Enter values and press 'set'</div> :
            <div className={count === counterSettings.MaxValue ? 'text-red-500' : ''}>
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


