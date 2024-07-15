import React from 'react'
import './counter.css';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from '../Redux/counterAction';





 function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)
  return (
    <div className='counterContainer' >
        <h1>Counter App</h1>
        <div>
            <button className='decrementButton' onClick={()=>dispatch(Decrement())}> Decrement</button>
        {counter}
        <button className='incrementButton' onClick={()=>dispatch(Increment())}> Increment</button>
      </div>
    </div>
  )
}
export default Counter