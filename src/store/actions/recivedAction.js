export const logOut = () => async (dispatch, getState) => {
    dispatch({type: 'LOGOUT', payload: true});

};
