import { useSelector } from 'react-redux'; //accessing Redux store data
import classes from './Counter.module.css';

// ================================== Notes =====================================
// https://react-redux.js.org/api/hooks
// useSelector - Allows you to extract data from the Redux store state, using a selector function.
//  on more complex states with tons of properties, useSelector allows us to take slices/tiny parts of the overall state
// ==============================================================================

const Counter = () => {
  //pass a function, which we'll receive the state managed by Redux and then we return the part of the state we want to extract
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
