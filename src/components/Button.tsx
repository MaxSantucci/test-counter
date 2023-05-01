import React from 'react';
import {SuperButton} from './SuperButton';
import {useAppSelector} from "../redux/store";
import {selectButtonClicked, selectCounter, selectError} from "../redux/counter/selector";
import {selectCounterSettings} from "../redux/counterSettings/selector";

type ButtonPropsType = {
   addCounter: () => void
   resetCounter: () => void
}

export const Button: React.FC<ButtonPropsType> = (
   {
      addCounter,
      resetCounter,
   }) => {
    const counterSettings = useAppSelector(selectCounterSettings)
    let count = useAppSelector(selectCounter)
    const error = useAppSelector(selectError)
    const clicked = useAppSelector(selectButtonClicked)

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
            disabled={clicked || count === counterSettings.MaxValue || error !== ''}
            onClick={CounterHandler}
         />
         <SuperButton
            name="Reset"
            disabled={clicked || count === counterSettings.StartValue || error !== ''}
            onClick={ResetCounterHandler}
         />
      </div>
   );
};


