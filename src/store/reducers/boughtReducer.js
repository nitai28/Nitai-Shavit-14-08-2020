const initState = {
    items: [{
        name: "iPhone 11",
        onlineStore: "amazon",
        price: {num: 23.56, currency: "usd"},
        deliveryEstDate: 1597300125117
    }, {
        name: "Samsung U65",
        onlineStore: "ebay",
        price: {num: 500, currency: "usd"},
        deliveryEstDate: 1597395965183
    }]
};

const boughtReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state
            }
        case 'REMOVE_ITEM':
            return {
                ...state
            }

        default:
            return state;
    }
};

export default boughtReducer;
