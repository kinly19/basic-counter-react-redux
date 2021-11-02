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
    console.log("counter has incremented")
    return {
      counter:state.counter + 1
    };
  };

  if (action.type === 'decrement'){
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


