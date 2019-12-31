import { combineReducers } from "redux";

const initialState = 0;

 function counter(state = initialState,action ){
    switch(action.type){
        case 'increase':
            return state +1;
        case 'decrease':
            return state - 1;
        default:
             return state;
    }
}

const reducers = combineReducers(
    {
        counter:counter
    }
)
export default reducers;