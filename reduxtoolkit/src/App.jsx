import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

function App() {

  const dispatch = useDispatch();
  
  const count = useSelector(state => state.counter.value);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <span>Count is : {count}</span>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
