export const updateReceivedAndBoughtList = (receivedItem) => {
    return (dispatch, getState) => {
        let updatedBoughtItems = getState().bought.items.filter(item => item.id !== receivedItem.id);
        let updatedReceivedItems = [...getState().bought.receivedItems, receivedItem]
        dispatch({type: 'UPDATE_RECEIVED_AND_BOUGHT_LIST', payload: {updatedBoughtItems, updatedReceivedItems}});
    }
}

export const resetAuth = () => {
    return (dispatch) => {
        dispatch({type: 'RESET_AUTH'});
    }
}





