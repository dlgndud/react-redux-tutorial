import {createStore} from 'redux';

// createStore를 만들때 리듀서를 하나 이상 등록해야...
export default createStore(function(state,action){
    if(state === undefined) {
        return {number:0}
    }
    if(action.type === 'INCREMENT') {
        return {...state, number:state.number + action.size}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)