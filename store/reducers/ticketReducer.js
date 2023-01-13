import { GET_TICKET_CARDS, SET_LOADING_PENDING, SET_LOADING_SUCCESS, SOMETHING_ERROR } from '../types';

const initialState = {
  tickets: [],
  loading: false,
  message: ''
};

const ticketReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TICKET_CARDS:
      return {
        ...state,
        tickets: payload
      };
    case SET_LOADING_PENDING:
      return {
        ...state,
        tickets: [],
        loading: true
      }
    case SET_LOADING_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case SOMETHING_ERROR:
      return {
        ...state,
        message: payload
      };
    default:
      return state;
  }
};

export default ticketReducer;
