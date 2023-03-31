import React from 'react';
import {SuperButton} from './SuperButton';

type ButtonPropsType = {
   count: number
   max: number
   start: number
   addCounter: () => void
   resetCounter: () => void
   error: string
}

export const Button: React.FC<ButtonPropsType> = ({count, max,start, addCounter, resetCounter, error}) => {
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
            disabled={count === max || error !== ""}
            onClick={CounterHandler}
         />
         <SuperButton
            name="Reset"
            disabled={count === start || error !== ""}
            onClick={ResetCounterHandler}
         />
      </div>
   );
};


