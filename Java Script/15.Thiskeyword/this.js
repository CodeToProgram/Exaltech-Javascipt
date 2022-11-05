// {
//     console.log(this)
// }
// calling in the function

// {

// }
// console.log(this)
// calling out of the function
// ------------------1----------------
// const movies = {
//     titles: ["Iron man", "Hulk", "Thor", "Captain America", "Black widow"],
//     category:"Action",
//     getmovies (){
//         console.log(this.category)
//     }
// };
// movies.getmovies();

// ----------------------2----------------
// movies.getratings = function () {
//     console.log(this)
// }
// movies.getratings()

// ---------------3----------------

// function getdata () {
//     console.log(this)
// };
// getdata();

// ------------4------------
// const movies = {
//     titles: ["Iron man", "Hulk", "Thor", "Captain america", "Black widoww"],
//     category:"Action",
//     getmovies () {
//         const self = this
//         const result = this.titles.map((item)=>{
//             return `$ {item} - ${this.category}`;
//         })
//         return result;
//     },
// };
// console.log(movies.getmovies());

// ---------5--------------
// const movies = {
//     titles: ["Iron man", "Hulk", "Thor", "Captain america", "Black Widow"],
//     category: "Action",
//     getmovies () {
//         const result = this.titles.map(function(item){
//             return console.log(this.category)
//         },this);
//         console.log(result)
//     }
// };
// console.log(movies);
// In javsscript this keyword refer to an


