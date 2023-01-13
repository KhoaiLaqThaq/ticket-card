const initialState = {
  action: 'none'
}

export default function swipeButtonsReducer(state = initialState, action) {
  const {type} = action;
  switch (type) {
    case 'refresh':
      return Object.assign({}, state, {action: 'refresh'});
    case 'none':
          return Object.assign({}, state, { action: 'none' }); 
    default:
      return state;
  }
}