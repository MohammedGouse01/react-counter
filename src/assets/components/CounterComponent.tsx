import { useState } from "react";

function CounterComponent(){
    const [CurrentCount,setCounter]=useState(0)
    const Increment= ()=>{
        setCounter((c)=>c+1)
    }
    const Decrement= ()=>{
        setCounter((c)=>c>0?c-1:c)
    }
    return <>
    <div>
        <h1>Current Count : {CurrentCount}</h1>
        <button onClick={Increment} >Increment</button>
        <button onClick={Decrement} >Decrement</button>
    </div>
    </>
}

export default CounterComponent