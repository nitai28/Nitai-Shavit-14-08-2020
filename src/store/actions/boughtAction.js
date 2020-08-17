const Api_URL = "https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS";

export const updateReceivedAndBoughtList = (receivedItem) => {
    return (dispatch, getState) => {
        let updatedBoughtItems = getState().bought.items.filter(item => item.id !== receivedItem.id);
        let updatedReceivedItems = [...getState().bought.receivedItems, receivedItem]
        dispatch({type: 'UPDATE_RECEIVED_AND_BOUGHT_LIST', payload: {updatedBoughtItems, updatedReceivedItems}});
    }
}

export const addBoughtItem = (item) => {
    return (dispatch) => {
        dispatch({type: 'ADD_NEW_BOUGHT_ITEM', payload: item});
    }
};

export const calculateCurrentUsd = () => {
    return (dispatch) => {
        fetch(Api_URL, {method: 'GET'}).then(res => res.json()).then(res => {
            dispatch({type: 'UPDATE_USD_TO_NIS', payload: +res.rates.ILS.toFixed(2)});
        }).catch(_ => {
            dispatch({type: 'UPDATE_API_ERROR'});
        })
    }
};

export const clearError = () => {
    return (dispatch) => {
        dispatch({type: 'CLEAR_API_ERROR'});
    }
};





