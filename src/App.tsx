import React, {ChangeEvent, useEffect, useMemo, useState} from 'react';
import './App.css';
import {Scoreboard} from './components/Scoreboard';
import {Button} from './components/Button';
import Settings from './components/Settings';

export type CounterType = {
   StartValue: number
   MaxValue: number
}

const setValueToLocalStorage = (value: CounterType) => {
   localStorage.setItem('counter_settings', JSON.stringify(value))
}

const getValueFromLocalStorage = () => {
   let local_storage = localStorage.getItem('counter_settings')
   return local_storage ? JSON.parse(local_storage) : null
}

const initialValue = {
   StartValue: 0,
   MaxValue: 7
}

function App() {
   const [value, setValue] = useState<CounterType>( () => {
      let local_storage = getValueFromLocalStorage()
      return local_storage ? local_storage : initialValue
   })
   const [count, setCount] = useState<number>(value.StartValue)

   const [error, setError] = useState('')

   const [buttonClicked, setButtonClicked] = useState(false)

   const [input, setInput] = useState('')

   let local_storage = getValueFromLocalStorage()

   useEffect(() => {
      let local_storage = getValueFromLocalStorage()
      if (local_storage) {
         setValue(local_storage)
         setCount(local_storage.StartValue)
      }
      console.log("abc")
   }, [])
   console.log(value)

   const saveSettings = (value: CounterType) => {
      setValue(value)
      setValueToLocalStorage((value));
      setCount(value.StartValue)
   }

   const isHasNewValue = useMemo(() => {
      if (!local_storage) return true
      return local_storage.StartValue !== value.StartValue || local_storage.MaxValue !== value.MaxValue
   }, [value, local_storage])

   const Counter = () => {
      setCount(count + 1)
   }

   const ResetCounter = () => {
      setCount(value.StartValue)
   }

   const onCLickSaveButton = () => {
      saveSettings(value)
   }

   const valueChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue({...value, [event.target.name]: Number(event.currentTarget.value)})
   }

   return (
      <div className="bg-black h-screen flex items-center justify-center">
         <div className="w-80 h-80 border-2 border-blue-600 text-center p-8">
            <Settings
               value={value}
               error={error}
               onCLickSaveButton={onCLickSaveButton}
               valueChange={valueChange}
               buttonClicked={buttonClicked}
               setButtonClicked={setButtonClicked}
               setError={setError}
            />
         </div>
         <div className="w-80 h-80 ml-24 border-2 border-blue-600 text-center">
            <div className="text-white text-5xl text-center p-8">
               <Scoreboard
                  max={value.MaxValue}
                  count={count}
                  error={error}
                  input={input}
                  isHasNewValue={isHasNewValue}
               />
            </div>
            <Button
               max={value.MaxValue}
               start={value.StartValue}
               count={count}
               addCounter={Counter}
               resetCounter={ResetCounter}
               error={error}
               buttonClicked={!buttonClicked}
            />
         </div>
      </div>
   );
}

export default App;
