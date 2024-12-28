import {createStore} from 'redux';

//store
const store = createStore(reducer);

function reducer(state={amount:1}, action){
    
    if(action.type==='increment'){
      
        state.amount=state.amount+1;
       
    }
    return state
}

//global state
store.subscribe(()=>{
    console.log(store.getState());
})

setInterval(()=>{
    store.dispatch({type:'increment'})
},3000)
