import React, {useEffect, useState} from 'react';
import ItemTable from "../components/ItemsTable";
import StoreTable from "../components/StoreTable";
import {connect} from "react-redux";
import {Switch} from "antd";

const ReceivedList = ({receivedItems, usdToNis}) => {
    const [chosenCurrency, setChosenCurrency] = useState('ILS');
    const [currentValueUsdToNis, setCurrentValueUsdToNis] = useState(usdToNis)

    useEffect(() => {
        setCurrentValueUsdToNis(usdToNis)
    }, [usdToNis]);

    return (
        <div>
            <h1>Received items</h1>
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
                tableData={receivedItems}/>
            <StoreTable
                usdToIls={currentValueUsdToNis}
                currencyType={chosenCurrency}
                tableData={receivedItems}/>
        </div>
    );
};

const mapStateToProps = state => {
    let {receivedItems, usdToNis} = state.bought;
    return {
        receivedItems,
        usdToNis
    }
};

export default connect(mapStateToProps)(ReceivedList);
