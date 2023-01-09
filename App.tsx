import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

export default function App() {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type:'INCREMENT'});
  }

  const decrement = () => {
    dispatch({type:'DECREMENT'});
  }
  const counter = useSelector((state:any)=> state.counter)
  return (
    <div>
      <h1>Counter!</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
