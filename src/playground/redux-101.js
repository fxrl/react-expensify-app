import { createStore } from 'redux';

//Action Generators - function that return Action Objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT', 
    incrementBy 
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ setTo }) => ({
    type: 'SET',
    setTo
});

const resetCount = () => ({
    type: 'RESET',
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.setTo
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

//Start watching for changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});



// I'd like to increment the count
// store.dispatch(
//     {
//         type: 'INCREMENT',
//         incrementBy: 5
//     }
// );

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(
    {
        type: 'INCREMENT',
    
    }
);

//stop watching for changes
// unsubscribe();

//I'd like to reset the count to 0
store.dispatch(resetCount());

//I'd like to decrement the count
store.dispatch(
    {
        type: 'DECREMENT',
        decrementBy: 10
    }
);

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({setTo: 101}));