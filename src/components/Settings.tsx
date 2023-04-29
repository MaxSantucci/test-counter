import React, {ChangeEvent, useEffect, useState} from 'react';
import {SuperButton} from './SuperButton';
import {CounterType} from '../App';

type SettingsPropsType = {
   value: CounterType
   error: string
   onCLickSaveButton: () => void
   valueChange: (event: ChangeEvent<HTMLInputElement>) => void
   buttonClicked: boolean
   setButtonClicked: (buttonClicked: boolean) => void
   setError: (message: string) => void
}

const Settings: React.FC<SettingsPropsType> = ({value, error, onCLickSaveButton, valueChange, buttonClicked, setButtonClicked, setError}) => {
   const [values, setValues] = useState(value);
   // console.log(setValues)

   const onCLickSaveButtonHandler = () => {
      onCLickSaveButton();
      setButtonClicked(false)
   }

   useEffect(() => {
      console.log(values.StartValue < 0 || values.StartValue >= values.MaxValue)
      if(value.StartValue < 0 || value.StartValue >= value.MaxValue) {
         setError("Incorrect value!");
      } else {
         setError("");
      }
   }, [value]);

   const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      valueChange(event)
      // setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
      setButtonClicked(true)
   }
   console.log(value)

   return (
      <div className=''>
         <div className='w-252 h-180 flex flex-col justify-around p-6 font-bold border-2 border-blue-600 text-left'>
            <label className="text-blue-600 font-bold text-1xl" htmlFor="number-input">
               Max value:
               <input
                  className={`w-20 ml-17 text-center focus:ring-blue-600 ${error !== "" ? "border-2 border-rose-500 bg-red-200" : ""}`}
                  name={'MaxValue'}
                  type={'number'}
                  defaultValue={value.MaxValue}
                  onChange={valueChangeHandler}
               />
            </label>
            <label className="text-blue-600 font-bold pr-2.5 text-1xl" htmlFor="number-input">
               Start value:
               <input
                  className={`w-20 ml-10 focus:ring-blue-600 text-center ${error !== "" ? "border-2 border-rose-500 bg-red-100" : ""}`}
                  name={'StartValue'}
                  type={'number'}
                  defaultValue={value.StartValue}
                  onChange={valueChangeHandler}
               />
            </label>
         </div>
         <div className='mt-34'>
            <SuperButton
               name="Save"
               disabled={!buttonClicked || Boolean(error)}
               onClick={onCLickSaveButtonHandler}
            />
         </div>
      </div>
   );
};

export default Settings;





