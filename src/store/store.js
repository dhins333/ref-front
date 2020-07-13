import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import mainReducer from '../reducers/mainReducer';

const store = createStore(mainReducer,{
    folderArray:[],
    max:0,
    skips:0
},applyMiddleware(thunk));

export default store;