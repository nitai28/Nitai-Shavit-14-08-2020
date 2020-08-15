import React from 'react';
import {connect} from "react-redux";
import ItemTable from "../components/ItemsTable";
import StoreTable from "../components/StoreTable";
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {updateReceivedAndBoughtList} from "../store/actions/boughtAction";


const BoughtItems = ({items, moveItemFromBoughtToReceived}) => {

    const handleReceived = (item) => {
        moveItemFromBoughtToReceived(item)
    }


    return (
        <div>
            <h1>Bought items</h1>
            <Button type="primary" icon={<PlusOutlined/>}>
                Add item
            </Button>
            <ItemTable handleReceived={handleReceived} withReceivedBtn tableData={items}/>
            <StoreTable tableData={items}/>
        </div>
    );
};

const mapStateToProps = state => {
    let {items} = state.bought;
    return {
        items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        moveItemFromBoughtToReceived: (item) => dispatch(updateReceivedAndBoughtList(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BoughtItems);
