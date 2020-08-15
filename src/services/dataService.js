export const buildStoreTableData = (data) => {
    let tableDataMap = new Map();
    data.forEach(item => {
        if (tableDataMap.has(item.onlineStore)) {
            tableDataMap.set(item.onlineStore, tableDataMap.get(item.onlineStore) + item.priceInNIS)
        } else tableDataMap.set(item.onlineStore, item.priceInNIS)
    });
    let tableDataArray = [];
    tableDataMap.forEach((value, key) => {
        tableDataArray.push({storeName: key, totalOrdersSum: value, key})
    });
    return tableDataArray
};
