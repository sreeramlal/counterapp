import { decrement, increment, reset } from "./redux/actions";
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state); 

  return (
    <div>
      
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>  
    </div>
  );
}

export default App;
