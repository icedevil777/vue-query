const items = [{name: 'vasa', price: 1}];
const item = {name: 'grisha', price: 10};
const proxyItems = new Proxy(items, {});

items.push(item)
// proxyItems.push(item)
item.price = 5

console.log('result', item === proxyItems[1])
console.log('proxyItems', proxyItems)
console.log('items     ', items)
console.log('item', item)