import {createStore} from 'redux';

//store
const store = createStore(reducer);
const history = [];

function reducer(state={amount:1}, action){
    if(action.type==='increment'){
      
         return {amount: state.amount+1}
    }
    return state
}
store.subscribe(()=>{
    history.push(store.getState())
    console.log(history);
})

setInterval(()=>{
    store.dispatch({type:'increment'})
},3000)

