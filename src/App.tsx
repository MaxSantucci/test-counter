import React, {useEffect, useState} from 'react';
import './App.css';
import {Scoreboard} from './components/Scoreboard';
import {Button} from './components/Button';
import Settings from './components/Settings';

export type CounterType = {
   StartValue: number
   MaxValue: number
}

function App() {
   const [value, setValue] = useState<CounterType>({
      StartValue: 0,
      MaxValue: 7
   })
   const [count, setCount] = useState<number>(value.StartValue)

   const [error, setError] = useState('')

   useEffect(() => {
      let local_storage = localStorage.getItem('counter_settings')
      if(local_storage) {
         let newCounter = JSON.parse(local_storage)
         console.log(newCounter);
         setValue(newCounter)
         setCount(newCounter.StartValue)
      }
   }, [])


   useEffect(() => {
      let local_storage = {
         StartValue: value.StartValue,
         MaxValue: value.MaxValue
      }
      localStorage.setItem('counter_settings', JSON.stringify(local_storage))
   }, [value])


   const saveSettings = (newSaveSettings: CounterType) => {
      setValue(newSaveSettings)
      setCount(newSaveSettings.StartValue)
      setError('')
   }

   const Counter = () => {
      setCount(count + 1)
   }

   const ResetCounter = () => {
      setCount(value.StartValue)
   }

   return (
      <div className="bg-black h-screen flex items-center justify-center">
         <div className="w-80 h-80 border-2 border-blue-600 text-center p-8">
            <Settings
               value={value}
               saveSettings={saveSettings}
               error={error}
               setError={setError}
            />
         </div>
         <div className="w-80 h-80 ml-24 border-2 border-blue-600 text-center">
            <div className="text-white text-5xl text-center p-8">
               <Scoreboard
                  max={value.MaxValue}
                  start={value.StartValue}
                  count={count}
                  error={error}
               />
            </div>
            <Button
               max={value.MaxValue}
               start={value.StartValue}
               count={count}
               addCounter={Counter}
               resetCounter={ResetCounter}
               error={error}
            />
         </div>
      </div>
   );
}

export default App;
