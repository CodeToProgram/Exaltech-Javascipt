// if (true) {
//     console.log('Hello People');
// }else if(false) {
//     console.log('Wassup');
// }else {
//     console.log('Conditions dont match')
// }

// const time = 22;
// if (time >= 6 && time<12){
//     console.log('Good Morning')
// } else if (time === 12) {
//     console.log('Good Noon')

// } else if (time > 12 && time< 18){
//     console.log('Good Afternoon')
// } else if (time >= 18 && time < 20) {
//     console.log('Good Evening')
// } else {
//     console.log('Good Night')
// };

// const role = 'Owner';

// if (role === 'Admin'){
//     console.log('Hello Admin')
// } else if (role === 'Owner') {
// console.log('Hello Owner')
// } else if (role === 'Guest'){
//     console.log('Hello Guest')
// } else {
//     console.log('Access Denied')
// }
// ----------------------------------------------If else--------------------------------------

// const role = 'Admin';
// switch(role){
//     case "Admin":
//     console.log('Hello Admin');
//     break
//     case "Owner":
//         console.log('Hello Owner');
//         break
//         case "Guest":
//             console.log('Hello Guest');
//             break

//             default :
//             console.log('Access Denied')
// }        
// -------------------------Switch-----------------------------------------

// const letter = ('A', 'B', 'C', 'D', 'E', 'F', 'G')
// for (let i = 0; i < letter.length; i++) {
//     console.log(letter[i])
// }

// console.log('If else statement')
// var hasDrivingLicense = false;
// const age = 17;
// if (age >=18) {
//     hasDrivingLicense = true;
// }

// if (hasDrivingLicense){
//     console.log = ("Authorized")
// } else {
//     console.log = ('Not Authorized')
// };

// var weekDay = 'Friday';

// if (weekDay === 'Sunday') {
//     console.log('If else statement');
// } else if (weekDay === 'Monday') {
//     console.log('loops and itrations')
// } else if (weekDay === 'Tuesday') {
//     console.log('let const var');
// } else if (weekDay === 'Wednesday') {
//     console.log('Functions');
// } else if (weekDay === 'Thursday' && weekDay === 'Friday') {
//     console.log('Enjoy the weekend');
// } else if (weekDay === 'Saturday') {
//     console.log('Advance JS');
// } else {
//     console.log('Partyyyyy')
// };



// ------------------------Loops (For)-----------------------

// for (let i = 10, i > 1, i--) {
// console.log("2 *", i, "=", i*2);
// };


// ==============Loops(While)====================

// let a =1;

// while (a <= 10) {
//     console.log("2 *", a, '=', 2 * a);
//     a++;
// }

// let sum = 0;
// while ( sum < 10) {
//     sum++;
//     console.log(sum);
// }

// ============================= Do while loop ==================================

// let sum = 0;
// do {
//     console.log(sum);
//     sum++;
// }  while (sum<10);
// =============================================== For In loop

// const valueObj = {valueOne : 10, valueTwo : 20, valueThree : 30, valueFour : 40};
// // obj.valueTwo = obj.valueTwo/ 2;
// // obj.valueOne = obj.valueOne/ 2;
// // obj.valueThree = obj.valueThree/ 2;
// // obj.valueFour = obj.valueFour/ 2;
// // console.log(obj);

// for (let a in valueObj) {
// // console.log(a);
// // console.log([a]);
// // console.log(obj[a]);
// valueObj[a] = valueObj[a] / 2;
// }
// console.log(valueObj);

// ----------------------------------------

const valueArray = [1,2,3,4,5,6,7,8];
for (let b of valueArray) {
    console.log(b);
}
for (let i = 0; i < valueArray.length; i++){
 console.log('for--', valueArray * 1)
}