import React, {useState, useEffect, useMemo} from 'react';
import {Button, Table} from 'antd';
import moment from 'moment';

const ItemTable = ({tableData = [], withReceivedBtn = false, handleReceived = () => null}) => {
    const [dataSource, setDataSource] = useState([])
    const columns = useMemo(() => {
        return [
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
                title: 'Delivery Estimation Date',
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

        ]
    }, [handleReceived]);


    useEffect(() => {
        if (tableData.length > 0) {
            let data = [];
            tableData.forEach((item, index) => {
                let itemObj = {
                    key: index,
                    name: item.name,
                    store: item.onlineStore,
                    price: item.priceInNIS,
                    date: item.deliveryEstDate
                }
                if (withReceivedBtn) {
                    itemObj.action = item
                }
                data.push(itemObj)
            })
            setDataSource(data.sort((a, b) => a.date - b.date))
        } else setDataSource([])

    }, [tableData, withReceivedBtn])


    return (
        <div>
            {dataSource &&
            <Table style={{"width": "85vw", "margin": "35px auto"}}
                   dataSource={dataSource}
                   columns={withReceivedBtn ? columns : columns.slice(0, columns.length - 1)}
            />};
        </div>
    );
};


export default ItemTable;
