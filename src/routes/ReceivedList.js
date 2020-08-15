import React from 'react';
import ItemTable from "../components/ItemsTable";
import StoreTable from "../components/StoreTable";
import {connect} from "react-redux";

const ReceivedList = ({receivedItems}) => {
    return (
        <div>
            <h1>Received items</h1>
            <ItemTable tableData={receivedItems}/>
            <StoreTable tableData={receivedItems}/>
        </div>
    );
};

const mapStateToProps = state => {
    let {receivedItems} = state.bought;
    return {
        receivedItems
    }
};

export default connect(mapStateToProps)(ReceivedList);
