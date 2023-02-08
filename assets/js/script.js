//recursive functions

// function getNumbers(num) {
//     console.log(num);

//     let number = num - 1;

//     if (number > 0) {
//         getNumbers(number);
//     }
// }

// getNumbers(10);





// function sumOfNums(n){
//     let sum = 0;
//     for(let i = 0; i <= n; i++){
//         sum+=i;
//     }
//     console.log(sum);
// }

// sumOfNums(5);






// function sumOfNums(num){

//     if(num == 1){
//         return num;
//     }else{
//         return num + sumOfNums(num - 1)
//     }
// }

// console.log(sumOfNums(5));



// let numbers =[11,4,6,8,9];

// numbers.forEach((element,index) => {
//    if(element == 6){
//     console.log(element)
//    }


// });

// for (const item of numbers) {
//     console.log(item)
// }






// let user1 ={
//     id:1,
//     name: "Mirze",
//     surname: "Beshirzade"
// }


// let user2 ={
//     id:2,
//     name: "Mirze",
//     surname: "Ibadova"
// }


// let user3 ={
//     id:3,
//     name: "Elekber",
//     surname: "Hesenov"
// }



// let users = [user1,user2,user3];

// for(const user of users){
//     for(const key in user){
//         if(key =="name" && user[key] == "Mirze"){
//             count++;
//         }
//     }
// }

// console.log(count);

// for (const key in user1) {
//     if (user.name == "Mirze" && user.surname == "Beshirzade") {
//         count++;
//     }

// }

// console.log(count);







//let nums1 = [1,4,6,8,9,11];

// console.log(nums1);

// let nums2 = nums1;

// nums2[0] = 100;

// console.log(nums1);

// let newArr = nums1.map(m=>{
//     return m * 2;
// })

// console.log(newArr);

// console.log(nums1);



// function numsOfOdd(num){
//     return num % 2 != 0
// }

// function numsOfEven(num){
//     return num % 2 == 0
// }

// function numsOfGraterThanFive(num){
//     return num > 5
// }








// function sumOfOdd(arr){
//     let sum = 0;
//     for(let i = 0;i < arr.length;i++){
//         if(arr[i]%2 != 0 ){
//             sum+=arr[i]
//         }
//     }
//     console.log(sum);
// }




// function sumOfEven(arr){
//     let sum = 0;
//     for(let i = 0;i < arr.length;i++){
//         if(arr[i]%2 == 0 ){
//             sum+=arr[i]
//         }
//     }
//     console.log(sum);
// }




// function sumOfGraterThanFive(arr){
//     let sum = 0;
//     for(let i = 0;i < arr.length;i++){
//         if(arr[i] > 5 ){
//             sum+=arr[i]
//         }
//     }
//     console.log(sum);
// }


// function calculateNums(arr,callback){
//     let sum = 0;
//     for(let i = 0;i < arr.length;i++){
//         if(callback(arr[i])){
//             sum+=arr[i]
//         }
//     }
//     console.log(sum);
// }


// let nums = [1,2,3,4,5,6]


// calculateNums(nums,m => m % 2 != 0);
// calculateNums(nums,m => m % 2 == 0);
// calculateNums(nums,m => m > 5);
 



// let user1 ={
//     id:1,
//     name: "Mirze",
//     surname: "Beshirzade",
//     age: 27
// }


// let user2 ={
//     id:2,
//     name: "Cinare",
//     surname: "Ibadova",
//     age: 22
// }


// let user3 ={
//     id:3,
//     name: "Elekber",
//     surname: "Hesenov",
//     age: 20
// }


// let user4 ={
//     id:4,
//     name: "Jale",
//     surname: "Abdullayeva",
//     age: 18
// }



// let users = [user1,user2,user3,user4];

// function showUsersByAge(people,callback){

//     for(const item of people){
//         if(callback(item.age)){
//             console.log(item.name + " " + item.surname);
//         }
//     }
// }


// showUsersByAge(users,m=>m>20)


// let filteredDatas = users.filter(m=>m.age > 20);



// let nums = [1,2,3,4]

// let sumOfAge = users.reduce((total,current)=>total+current);

// console.log(sum);



// const getSumOfAgesFromFilteredDatas = datas =>{
//     let sumOfAge = 0;

//     for(const item of datas){
//         sumOfAge += item.age
//     }

//     console.log(sumOfAge);
// }

// getSumOfAgesFromFilteredDatas(filteredDatas)



