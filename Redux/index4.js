import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(logger.default));

function reducer(state={amount:1}, action){
    if(action.type==='increment'){
      
         return {amount: state.amount+ action.payload}
    }
    return state
}

setInterval(()=>{
    store.dispatch({type:'increment', payload: 5})
},3000)
