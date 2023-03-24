import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from './components/Scoreboard';
import {Button} from './components/Button';

function App() {
   const [count, setCount] = useState<number>(0)

   const Counter = () => {
      setCount(count + 1)
   }

   const ResetCounter = () => {
      setCount(0)
   }

   const maxCount = 7

   return (
      <div className="bg-black h-screen flex items-center justify-center">
         <div className='w-80 h-80 border-2 border-blue-600 text-center'>
            <div className='text-white text-5xl text-center p-8'>
               <Scoreboard
                  maxCount={maxCount}
                  count={count}/>
            </div>
            <Button
               maxCount={maxCount}
               count={count}
               addCounter={Counter}
               resetCounter={ResetCounter}
            />
         </div>
      </div>
   );
}

export default App;
