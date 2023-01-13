import {
  GET_TICKET_CARDS,
  SOMETHING_ERROR,
  SET_LOADING_PENDING,
  SET_LOADING_SUCCESS
} from '../types'

import TicketCardService from '../../services/TicketCardService'

export const getAll = () => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING_PENDING });
    const ticketCards = await TicketCardService.getTicketCards();
    const data = Object.assign(ticketCards.data);
    console.log(data);
    // TODO: dispatch set data
    dispatch({ type: GET_TICKET_CARDS, payload: data });
  } catch (error) {
    dispatch({ type: SOMETHING_ERROR, payload: "error: " + error.message });
  } finally {
    dispatch({type: SET_LOADING_SUCCESS});
  }
}
