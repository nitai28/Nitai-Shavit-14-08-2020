import React from 'react';
import {connect} from "react-redux";
import ItemTable from "../components/ItemsTable";
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';


const BoughtItems = ({items}) => {
    return (
        <div>
            <h1>Bought items</h1>
            <Button type="primary" icon={<PlusOutlined/>}>
                Add item
            </Button>
            <ItemTable withReceivedBtn tableData={items}/>
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
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(BoughtItems);
