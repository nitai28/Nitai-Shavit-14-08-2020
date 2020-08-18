import React, {useState, useEffect} from 'react';
import {Table} from 'antd';
import {buildStoreTableData} from '../services/dataService'

const StoreTable = ({tableData = [], currencyType, usdToIls}) => {
    const [dataSource, setDataSource] = useState([]);
    const columns = [
        {
            title: 'Store Name',
            dataIndex: 'storeName',
            key: 'storeName',
        },
        {
            title: 'Total Items Sum',
            dataIndex: 'totalOrdersSum',
            key: 'totalOrdersSum',
        }
    ];


    useEffect(() => {
        if (tableData.length > 0) {
            setDataSource(buildStoreTableData(tableData, currencyType, usdToIls))
        } else setDataSource([])
    }, [tableData, currencyType, usdToIls])


    return (
        <div>
            {dataSource &&
            <Table style={{"width": "50vw", "margin": "35px auto"}}
                   dataSource={dataSource}
                   columns={columns}
            />}
        </div>
    );
};

export default StoreTable;
