import React from 'react';
import {SuperButton} from './SuperButton';

type ButtonPropsType = {
   count: number
   max: number
   start: number
   addCounter: () => void
   resetCounter: () => void
   error: string
   buttonClicked: boolean
}

export const Button: React.FC<ButtonPropsType> = (
   {
      count,
      max,
      start,
      addCounter,
      resetCounter,
      error,
      buttonClicked
   }) => {
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
            disabled={!buttonClicked || count === max || error !== ''}
            onClick={CounterHandler}
         />
         <SuperButton
            name="Reset"
            disabled={!buttonClicked || count === start || error !== ''}
            onClick={ResetCounterHandler}
         />
      </div>
   );
};


