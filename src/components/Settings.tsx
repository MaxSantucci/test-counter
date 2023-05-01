import React, {ChangeEvent, useEffect} from 'react';
import {SuperButton} from './SuperButton';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {selectButtonClicked, selectError} from "../redux/counter/selector";
import {selectCounterSettings} from "../redux/counterSettings/selector";
import {buttonClicked, setError} from "../redux/counter/slice";

type SettingsPropsType = {
    onCLickSaveButton: () => void
    valueChange: (event: ChangeEvent<HTMLInputElement>) => void
    localMax: number
    localStart: number
}

const Settings: React.FC<SettingsPropsType> =
    ({
         onCLickSaveButton,
         valueChange,
         localMax,
         localStart
     }) => {
        const dispatch = useAppDispatch()
        const counterSettings = useAppSelector(selectCounterSettings)
        const error = useAppSelector(selectError)
        const clicked = useAppSelector(selectButtonClicked)


        const onCLickSaveButtonHandler = () => {
            onCLickSaveButton();
            dispatch(buttonClicked(false))
        }

        useEffect(() => {
            if (counterSettings.StartValue < 0 || counterSettings.StartValue >= counterSettings.MaxValue) {
                dispatch(setError("Incorrect value!"));
            } else {
                dispatch(setError(""));
            }
        }, [counterSettings]);

        const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            valueChange(event)
            dispatch(buttonClicked(true))
        }

        return (
            <div className=''>
                <div
                    className='w-252 h-180 flex flex-col justify-around p-6 font-bold border-2 border-blue-600 text-left'>
                    <label className="text-blue-600 font-bold text-1xl" htmlFor="number-input">
               Max value:
               <input
                   className={`w-20 ml-17 text-center focus:ring-blue-600 ${error !== "" ? "border-2 border-rose-500 bg-red-200" : ""}`}
                   name={'MaxValue'}
                   type={'number'}
                   defaultValue={localMax || counterSettings.MaxValue}
                   onChange={valueChangeHandler}
               />
            </label>
            <label className="text-blue-600 font-bold pr-2.5 text-1xl" htmlFor="number-input">
               Start value:
               <input
                   className={`w-20 ml-10 focus:ring-blue-600 text-center ${error !== "" ? "border-2 border-rose-500 bg-red-100" : ""}`}
                   name={'StartValue'}
                   type={'number'}
                   defaultValue={localStart || counterSettings.StartValue}
                   onChange={valueChangeHandler}
               />
            </label>
         </div>
         <div className='mt-34'>
            <SuperButton
               name="Save"
               disabled={!clicked || Boolean(error)}
               onClick={onCLickSaveButtonHandler}
            />
         </div>
      </div>
   );
};

export default Settings;





