import React, {ChangeEvent, useEffect, useState} from 'react';
import {SuperButton} from './SuperButton';
import {CounterType} from '../App';

type SettingsPropsType = {
   value: CounterType
   saveSettings: (newSaveSettings: CounterType) => void
   error: string
   setError: (text: string) => void

}

const Settings = (props: SettingsPropsType) => {
   const [newSaveSettings, setNewSaveSettings] = useState(props.value)

   useEffect(() => {
      setNewSaveSettings(props.value)
   }, [props.value])

   useEffect(() => {
      if(newSaveSettings.StartValue >= newSaveSettings.MaxValue) {
         props.setError("Incorrect value")
      } else {
         props.setError('')
      }
   }, [newSaveSettings, props.error, props])

   const onCLickSaveButton = () => {
      props.saveSettings(newSaveSettings)
   }

   const maxValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setNewSaveSettings({...newSaveSettings, MaxValue: Number(event.currentTarget.value)})
   }

   const startValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setNewSaveSettings({...newSaveSettings, StartValue: Number(event.currentTarget.value)})
   }

   return (
      <div className=''>
         <div className='w-252 h-180 flex flex-col justify-around p-6 font-bold border-2 border-blue-600 text-left'>
            <label className="text-blue-600 font-bold text-1xl" htmlFor="number-input">
               Max value:
               <input
                  // value={maxValue}
                  className='w-20 ml-17'
                  type={'number'}
                  value={newSaveSettings.MaxValue}
                  onChange={maxValueChangeHandler}
               />
            </label>
            <label className="text-blue-600 font-bold pr-2.5 text-1xl" htmlFor="number-input">
               Start value:
               <input
                  className='w-20 ml-10'
                  type={'number'}
                  value={newSaveSettings.StartValue}
                  onChange={startValueChangeHandler}
               />
            </label>
         </div>
         <div className='mt-34'>
            <SuperButton
               name="Save"
               // disabled={true}
               onClick={onCLickSaveButton}
            />
         </div>
      </div>
   );
};

export default Settings;





