// const nums=(1,2,4,6,-1,7,98,123);
// console.log(
//     nums.some(
//         function(anything)
//     {
//     return anything < 0
// }));

// const products = ['Apple', 'Adidas', 'Woodland', 'Samsung', 'Puma', 'Nike', 'Adidas', 'Apple', 'Adidas', 'Samsung', 'Nike', 'Apple', ];
// console.log(products.filter(function(item) {
//     return item==='Apple' || item==='Adidas';
// })
// );
// console.log(products.map(function(item){
//     return item
// }));

const nums = [1,2,3,4,5,6,7,8,9,10];

console.log(nums.reduce(function(acc, cur){
    return acc + cur * 2;
}));
