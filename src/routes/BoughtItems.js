import React, {useCallback, useEffect, useState} from 'react';
import {connect} from "react-redux";
import ItemTable from "../components/ItemsTable";
import StoreTable from "../components/StoreTable";
import AddItemModalForm from "../components/AddItemModalForm";
import {Button, Switch} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {addBoughtItem, updateReceivedAndBoughtList} from "../store/actions/boughtAction";


const BoughtItems = ({items, moveItemFromBoughtToReceived, addBoughtItem, usdToNis}) => {
    const [openAddItemModal, setOpenAddItemModal] = useState(false);
    const [chosenCurrency, setChosenCurrency] = useState('ILS');
    const [currentValueUsdToNis, setCurrentValueUsdToNis] = useState(usdToNis)


    const handleReceived = (item) => {
        moveItemFromBoughtToReceived(item)
    };

    const handleAddNewItem = useCallback((item) => {
        const {itemName: name, storeName: onlineStore, deliveryEstDate} = item;
        let newItem = {
            name,
            onlineStore,
            deliveryEstDate,
            priceInNIS: item.currencyType === 'usd' ? Math.round(item.price * usdToNis) : item.price,
            id: Date.now()
        };
        addBoughtItem(newItem)
    }, [usdToNis, addBoughtItem]);


    useEffect(() => {
        setCurrentValueUsdToNis(usdToNis)
    }, [usdToNis]);


    return (
        <div>
            <AddItemModalForm
                onFormSubmit={handleAddNewItem}
                closeModal={() => setOpenAddItemModal(false)}
                showModal={openAddItemModal}/>

            <h1>Bought items</h1>
            <Button onClick={() => setOpenAddItemModal(true)} type="primary" icon={<PlusOutlined/>}>
                Add item
            </Button>
            <div style={{"margin": "15px"}}>
                <Switch
                    onChange={(value) => setChosenCurrency(value ? 'ILS' : 'USD')}
                    checkedChildren="₪ ILS"
                    unCheckedChildren="$ USD"
                    defaultChecked/>
            </div>
            <ItemTable
                usdToIls={currentValueUsdToNis}
                currencyType={chosenCurrency}
                handleReceived={handleReceived}
                withReceivedBtn tableData={items}/>
            <StoreTable
                usdToIls={currentValueUsdToNis}
                currencyType={chosenCurrency}
                tableData={items}/>
        </div>
    );
};

const mapStateToProps = state => {
    let {items, usdToNis} = state.bought;
    return {
        items,
        usdToNis
    }
}

const mapDispatchToProps = dispatch => {
    return {
        moveItemFromBoughtToReceived: (item) => dispatch(updateReceivedAndBoughtList(item)),
        addBoughtItem: (item) => dispatch(addBoughtItem(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BoughtItems);
