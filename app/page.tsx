
"use client";
import Image from 'next/image'
import {RootState} from "./GlobalRedux/store"
import {useSelector,useDispatch} from "react-redux" 
import {increment,decrement,incrementByAmount} from "./GlobalRedux/features/counter/counterSlice"
export default function Home() {
  const count = useSelector((state:RootState) => state.counter.value);
  const dispatch = useDispatch()
  return (
    <div className='h-screen w-full   flex flex-col items-center justify-center  py-[100px]'>
      <div className='text-center'>  <h1 className='text-3xl'>This Is Demo Of<br/> How to use Redux<br/> in Next Js </h1>
      <div className='flex flex-col text-center  gap-5 mt-10
      '> 
      <button className='border px-3 py-2 rounded-md' onClick={()=>{dispatch(increment())}}>Increment</button>
      <p>Counter: {count}</p>
    <button className='border px-3 py-2 rounded-md' onClick={()=>{dispatch(decrement())}}>Decrement</button> 
    <button className='border px-3 py-2 rounded-md' onClick={()=>{dispatch(incrementByAmount(2))}}>Increment By 2</button> 
    </div>
  
  
    </div>
    </div>
  )
}
