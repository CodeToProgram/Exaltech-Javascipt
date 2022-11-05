// function getCircleArea (radius) {
//     return {
//         pi: 3.14;
//         radius,

//         getArea () {
//             return this.pi * this.radius * this.radius
//         }
//     }
// }
// const circleFirst = getCircleArea(10);
// const circleSecond = getCircleArea(5);

// const nums = [29, 100,28779,5665,987,600]
// const numstwo = [...nums, 20000]
// console.log(numstwo)

// const nums = [29,100,28779,5665,987,600]
// const letter = ["a", "b", "c"]

// console.log([...letter,20,200,...nums]);

// const personfname = {fname:"john"}
// const personlname = {lname:"wick"}
// const persondatatwo = {...personfname, phone:8884857338, ...personlname}
// const persondatathree = {...persondatatwo, email: beingshoaib4}
// console.log(persondatathree);


// const value = [1,2,3,4]
// const alphate = ["c", "d", "e"]
// console.log = ([...value, 20,40,...alphate]);

// const myselff = {myselff:"Mohammed"}
// const myself1 = {myself1: "Shoaib"}
// const myselfdatatwo = {...myselff, ...myself1}
// console.log(myselfdatatwo);

// Defualt paramete

function calculate1 (p,y,r) {
    r = r ||0.1
    const m=12
    const i= (p/m)* r * (y*m);
    return i;
}
console.log(calculate1(10000, 0.5, 2));