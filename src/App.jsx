import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [randomNum, setRandomNum] = useState(0);
  const randomRef = useRef(0)

  const generateNum =()=>{
    const num = Math.floor(Math.random()*100);
    setRandomNum(num)
  }
  useEffect(()=>{
    randomRef.current +=1
  })
  return (
    <div className='flex flex-col justify-center items-center gap-10 shadow-xl mt-30 ml-[500px] mr-[500px] p-20 rounded-2xl'>
      <h1 className='font-medium'>Random Number: {randomNum}</h1>
      <h1 className='font-medium'> Count : {randomRef.current}</h1>
      <button className='bg-red-400 p-2 rounded-xl text-white' onClick={generateNum}>Generate a Random Number</button>
    </div>
  )
}

export default App
