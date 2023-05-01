import React, {ChangeEvent, useEffect, useMemo} from 'react';
import './App.css';
import {Scoreboard} from './components/Scoreboard';
import {Button} from './components/Button';
import Settings from './components/Settings';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {selectCounter} from "./redux/counter/selector";
import {setCount} from "./redux/counter/slice";
import {selectCounterSettings, selectCounterSettingsStart} from "./redux/counterSettings/selector";
import {CounterSettings, counterValue} from "./redux/counterSettings/slice";

const setValueToLocalStorage = (value: CounterSettings) => {
   localStorage.setItem('counter_settings', JSON.stringify(value))
}

const getValueFromLocalStorage = () => {
   let local_storage = localStorage.getItem('counter_settings')
   return local_storage ? JSON.parse(local_storage) : null
}

function App() {
   const dispatch = useAppDispatch()
   const counterSettings = useAppSelector(selectCounterSettings)
   let count = useAppSelector(selectCounter)

   let local_storage = getValueFromLocalStorage()

   useEffect(() => {
      let local_storage = getValueFromLocalStorage()
      if (local_storage) {
         dispatch(counterValue(local_storage))
         // setCount(local_storage.StartValue)
      }
   }, [dispatch])

   const saveSettings = (value: CounterSettings) => {
      dispatch(counterValue(value))
      setValueToLocalStorage((value));
      dispatch(setCount(value.StartValue))
   }

   const isHasNewValue = useMemo(() => {
      if (!local_storage) return true
      return local_storage.StartValue !== counterSettings.StartValue || local_storage.MaxValue !== counterSettings.MaxValue
   }, [counterSettings, local_storage])

   const Counter = () => {
      dispatch(setCount(count + 1))
   }

   const ResetCounter = () => {
      dispatch(setCount(counterSettings.StartValue))
   }

   const onCLickSaveButton = () => {
      saveSettings(counterSettings)
   }

   const valueChange = (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(counterValue({...counterSettings, [event.target.name]: Number(event.currentTarget.value)}))
   }

   return (
      <div className="bg-black h-screen flex items-center justify-center">
         <div className="w-80 h-80 border-2 border-blue-600 text-center p-8">
            <Settings
               onCLickSaveButton={onCLickSaveButton}
               valueChange={valueChange}
               localMax={local_storage.MaxValue}
               localStart={local_storage.StartValue}
            />
         </div>
         <div className="w-80 h-80 ml-24 border-2 border-blue-600 text-center">
            <div className="text-white text-5xl text-center p-8">
               <Scoreboard
                   isHasNewValue={isHasNewValue}
               />
            </div>
            <Button
               addCounter={Counter}
               resetCounter={ResetCounter}
            />
         </div>
      </div>
   );
}

export default App;
