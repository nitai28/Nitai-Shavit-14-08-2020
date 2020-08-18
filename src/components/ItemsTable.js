import React, {useState, useEffect} from 'react';
import {Button, Table} from 'antd';
import moment from 'moment';
import '../styles/ItemTable.css'
import {buildTableData} from "../services/dataService";

const ItemTable = ({tableData = [], withReceivedBtn = false, handleReceived = () => null, currencyType, usdToIls}) => {
    const [dataSource, setDataSource] = useState([]);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Online Store',
            dataIndex: 'store',
            key: 'store',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Delivery Est Date',
            dataIndex: 'date',
            key: 'date',
            render: (date) => {
                return (<span>{moment.unix(date / 1000).format('DD/MM/YYYY')}</span>)
            }
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (item) => (
                <Button shape={"round"} type="primary" onClick={_ => handleReceived(item)}>
                    Received
                </Button>

            )
        },

    ];


    useEffect(() => {
        if (tableData.length > 0) {
            setDataSource(buildTableData(tableData, withReceivedBtn, currencyType, usdToIls))
        } else setDataSource([])

    }, [tableData, withReceivedBtn, currencyType, usdToIls]);


    return (
        <div>
            {dataSource &&
            <Table
                dataSource={dataSource}
                columns={withReceivedBtn ? columns : columns.slice(0, columns.length - 1)}
            />}
        </div>
    );
};


export default ItemTable;
