import {createStore} from 'redux';

//store
const store = createStore(reducer);

function reducer(state={amount:11}, action){

    if(action.type==='dec'){
        return {amount: state.amount-7}
    }else if(action.type==='inc'){
        return {amount: state.amount+3}
    }
    return state
}

//global state

console.log(store.getState());

store.dispatch({type:'dec'})
store.dispatch({type:'inc'})

console.log(store.getState());
