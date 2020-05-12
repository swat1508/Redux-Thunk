import {combineReducers} from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './icerCream/iceCreamReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    myCake:cakeReducer,
    myIceCream:iceCreamReducer,
    myUser:userReducer

});

export default rootReducer;