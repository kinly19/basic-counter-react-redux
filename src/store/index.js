import { createStore } from 'redux';

// ================================== Notes =====================================
// reducer function
// redux.createStore
//
// these methods will be used inside of the component we want to use redux 
// subscribe listener 
// listener function 
// action
// ==============================================================================

//reducer function 
const countReducer = (state = {counter: 0}, action) => {
  if(action.type === 'increment'){
    console.log("counter from store has incremented ")
    return {
      counter:state.counter + 1
    };
  };

  if(action.type === 'increase'){
    console.log('counter from store incremented by 5')
    return {
      counter: state.counter + action.amount
    };
  };

  if (action.type === 'decrement'){
    console.log("counter from store has decremented")
    return {
      counter: state.counter - 1 
    };
  };
  //default state
  return state;
};

//redux store
//point to our reducer function
const store = createStore(countReducer);


//subsbriber function
// const countSubscribe = () => {
//   const latestCount = store.getState();
//   console.log(latestCount);
//};

// //listener/subscriber
// store.subscribe(countSubscribe);
// //action
// store.dipatch({type: 'increment'});
// store.dipatch({type: 'decrement'});
export default store; 


