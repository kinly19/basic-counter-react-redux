import { useSelector, useDispatch } from 'react-redux'; //accessing Redux store data
import store from '../store';
import classes from './Counter.module.css';

// ================================== Notes =====================================
// https://react-redux.js.org/api/hooks
// useSelector() - Allows you to extract data from the Redux store state, using a selector function.
//  on more complex states with tons of properties, useSelector allows us to take slices/tiny parts of the overall state
// useDispatch() - This hook returns a reference to the dispatch function from the Redux store, use it to dispatch actions as needed
// actions - are objects with a type property
// ==============================================================================

const Counter = () => {
  //dispatch
  const dispatch = useDispatch();

  //pass a function, which we'll receive the state managed by Redux and then we return the part of the state we want to extract
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  
  const latestCounter = useSelector((state) => state.counter);
  console.log(latestCounter);

  //handlers
  const toggleCounterHandler = () => {
    dispatch({type: 'toggleCounter'});
  };

  const incrementHandler = () => {
    // dispatch action
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
