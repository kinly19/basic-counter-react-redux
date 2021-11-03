import { createStore } from 'redux';

// ================================== Notes =====================================
// reducer function
// redux.createStore
//
// these methods will be used inside of the component we want to use redux 
// subscribe listener 
// listener function 
// action

// we always want to return a new state object, never make changes to the state directly
// ==============================================================================

//initialState for reducer function
const initialState = { counter: 0, showCounter: true };

//reducer function 
const countReducer = (state = initialState, action) => {

  if (state.showCounter) {
    if (action.type === "increment") {
      console.log("counter from store has incremented ");
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    }

    if (action.type === "increase") {
      console.log("counter from store incremented by 5");
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    }

    if (action.type === "decrement") {
      console.log("counter from store has decremented");
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    }
  } 
  
  if (action.type === "toggleCounter") {
    console.log("Toggled counter");
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  //default state
  return state;
};

//redux store
//point to our reducer function
const store = createStore(countReducer);

export default store; 