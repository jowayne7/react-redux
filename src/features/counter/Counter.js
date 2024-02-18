import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement,increment, incrementByAmount } from "./counterSlice";

export function Counter(){
    const count= useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [ incrementAmount, setIncremet] = useState (0)

    const handleIncrement = ()=>{
        dispatch(incrementByAmount(incrementAmount))
    }
    const handleChange = (event)=>{
        setIncremet(Number(event.target.value))
    }


return(
    <div>
        <div>
            <button aria-label= "Increment value"
            onClick={() => dispatch(increment())}>Increment</button>
            <span>{count}</span>
            <button aria-label= "Decrement value"
            onClick={() => dispatch(decrement())}>Decrement</button>
            <input value={incrementAmount} onChange={handleChange}></input>
            <button onClick={handleIncrement}>Add Amount</button>
        </div>
    </div>
)
}