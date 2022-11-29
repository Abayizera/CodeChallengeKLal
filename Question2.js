const item = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Computer', price: 1000 }
];
//1. Filter and show the product that will be bought when you don't have much money I mean Cheap one
const cheapOne = item.filter((i) => {
    return i.price <= 5
})
console.log(cheapOne)
    //2. Filter and show the product that will be expensive in the array
const expensive = item.filter((i) => {
    return i.price >= 1000
})
console.log(expensive)

//3. Calculate the full price of all product combined
const Totalsum = item.reduce((total, i) => {
    return i.price + total
}, 0)
console.log(Totalsum)

//4. Calculate the full price of all product combined and remove product that are under the 10 dollar
const filterItem = item.filter((i) => {
    return i.price > 10
})
const sum = filterItem.reduce((total, i) => {
    return i.price + total
}, 0)
console.log(sum)