export const refreshLogout = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGOUT', payload: false });
  }
}

export const resetAuth = () => {
  return (dispatch) => {
    dispatch({ type: 'RESET_AUTH'});
  }
}





