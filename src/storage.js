"use strict";
const storage = {
    max: 6000,
    items: [],
};
let currentStorage = undefined;
function storageUsed() {
    if (currentStorage) {
        return currentStorage;
    }
    currentStorage = 0;
    for (let i = 0; i < storage.items.length; i++) {
        currentStorage += storage.items[i].weigth;
    }
    return currentStorage;
}
function add(item) {
    if (storage.max - item.weight >= storageUsed()) {
        storage.items.push(item);
        currentStorage += item.weight;
    }
    $("#numberOfItems").text(storage.items.length);
    if (isDevelopment) {
        const itemCount = storage.items.length;
        console.log(`${itemCount} items`);
        console.log(`${currentStorage} kg total`);
    }
}
add({ weight: 3000 });
