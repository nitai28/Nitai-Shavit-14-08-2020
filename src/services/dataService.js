export const buildStoreTableData = (data, currencyType, usdToIls) => {
    let tableDataMap = new Map();
    data.forEach(item => {
        if (tableDataMap.has(item.onlineStore)) {
            tableDataMap.set(item.onlineStore, tableDataMap.get(item.onlineStore) + Math.round(item.priceInNIS))
        } else tableDataMap.set(item.onlineStore, Math.round(item.priceInNIS))
    });
    let tableDataArray = [];
    tableDataMap.forEach((value, key) => {
        tableDataArray.push(
            {
                storeName: key,
                totalOrdersSum: currencyType === 'ILS' ? value + ' ₪' : Math.round(value / usdToIls) + ' $',
                key
            })
    });
    return tableDataArray
};

export const buildTableData = (tableData, withReceivedBtn, currencyType, usdToIls) => {
    let data = [];
    tableData.forEach((item, index) => {
        let itemObj = {
            key: index,
            name: item.name,
            store: item.onlineStore,
            price: currencyType === 'ILS' ? item.priceInNIS + ' ₪' : Math.round(item.priceInNIS / usdToIls) + ' $',
            date: item.deliveryEstDate
        };
        if (withReceivedBtn) {
            itemObj.action = item
        }
        data.push(itemObj)
    });
    return data.sort((a, b) => a.date - b.date);
}
