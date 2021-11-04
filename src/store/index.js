// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'; //redux toolkit

// ================================== Notes =====================================
// reducer function
// redux.createStore

// these methods will be used inside of the component we want to use redux 
// subscribe listener 
// listener function 
// action

// createSlice () - A function that accepts an initial state, an object of reducer functions, and a "slice name"
//  createSlice automatically creates unique action identifiers for our different reducers
//  https://redux-toolkit.js.org/api/createslice
// configureStore () - A friendly abstraction over the standard Redux createStore function that 
//  adds good defaults to the store setup for a better development experience.
//  https://redux-toolkit.js.org/api/configureStore

// we always want to return a new state object, never make changes to the state directly
// ==============================================================================

//initialState for reducer function
const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment (state) {
      state.counter++;
    },
    decrement (state) {
      state.counter --;
    },
    increase (state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

//Authenticate slice 
const initialAuthState = {
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state){
      state.isAuthenticated = true;
      console.log('logged in')
    },

    logout(state){
      state.isAuthenticated = false;
    }
  }
});

// ======================= without redux toolkit =======================
//reducer function 
// const countReducer = (state = initialState, action) => {

//   if (state.showCounter) {
//     if (action.type === "increment") {
//       console.log("counter from store has incremented ");
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     }

//     if (action.type === "increase") {
//       console.log("counter from store incremented by 5");
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };
//     }

//     if (action.type === "decrement") {
//       console.log("counter from store has decremented");
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     }
//   } 
  
//   if (action.type === "toggleCounter") {
//     console.log("Toggled counter");
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   //default state
//   return state;
// };
// const store = createStore(countReducer);

// =====================================================================

//redux store
//point to our reducer function

const store = configureStore({
  reducer: counterSlice.reducer 
});

export const counterActions = counterSlice.actions; //this allows us to use all our different actions
// alternative
// export const { increment, decrement, increase, toggle} = counterSlice.actions;
export default store; 