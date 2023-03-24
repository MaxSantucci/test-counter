import React from 'react';
import {SuperButton} from './SuperButton';

type ButtonPropsType = {
   count: number
   maxCount: number
   addCounter: () => void
   resetCounter: () => void
}

export const Button: React.FC<ButtonPropsType> = ({count,maxCount, addCounter, resetCounter}) => {
   const CounterHandler = () => {
      addCounter()
   }

   const ResetCounterHandler = () => {
      resetCounter()
   }

   return (
      <div className='mr-10'>
         <SuperButton
            name="Increment"
            disabled={count === maxCount}
            onClick={CounterHandler}
         />
         <SuperButton
            name="Reset"
            disabled={count === 0}
            onClick={ResetCounterHandler}
         />
      </div>
   );
};
