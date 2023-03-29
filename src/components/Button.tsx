import React from 'react';
import {SuperButton} from './SuperButton';

type ButtonPropsType = {
   count: number
   maxValue: number
   startValue: number
   addCounter: () => void
   resetCounter: () => void
}

export const Button: React.FC<ButtonPropsType> = ({count, maxValue,startValue, addCounter, resetCounter}) => {
   const CounterHandler = () => {
      addCounter()
   }

   const ResetCounterHandler = () => {
      resetCounter()
   }

   return (
      <div className="mr-10">
         <SuperButton
            name="Increment"
            disabled={count === maxValue}
            onClick={CounterHandler}
         />
         <SuperButton
            name="Reset"
            disabled={count === startValue}
            onClick={ResetCounterHandler}
         />
      </div>
   );
};


