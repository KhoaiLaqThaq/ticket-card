import { combineReducers } from 'redux'
import ticketReducer from './ticketReducer'
import swipeButtonsReducer from './swipeButtonsReducer';

export default combineReducers({
    ticketReducer: ticketReducer,
    swipeReducer: swipeButtonsReducer
});
