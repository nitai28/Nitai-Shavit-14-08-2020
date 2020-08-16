const initState = {
    items: [{
        id: 1,
        name: "iPhone 11",
        onlineStore: "amazon",
        priceInNIS: 3350,
        deliveryEstDate: 1597300125117
    }, {
        id: 2,
        name: "Samsung U65",
        onlineStore: "ebay",
        priceInNIS: 500,
        deliveryEstDate: 1597395965183
    }, {
        id: 3,
        name: "LG TV",
        onlineStore: "ebay",
        priceInNIS: 1500,
        deliveryEstDate: 1596666965183
    }],
    receivedItems: [],
    usdToNis: 3.5
};

const boughtReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_RECEIVED_AND_BOUGHT_LIST':
            return {
                ...state,
                items: action.payload.updatedBoughtItems,
                receivedItems: action.payload.updatedReceivedItems,

            };
        case 'ADD_NEW_BOUGHT_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload]
            };

        default:
            return state;
    }
};

export default boughtReducer;
