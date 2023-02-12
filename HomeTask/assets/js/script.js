// 2) Ededin faktorialinin hesablanmasini recursive function ile yazin.


// function getFactorial(number){
//     if(number==1){
//         return number;
//     }else{
//         return number *getFactorial(number-1)
//     }
// }


// console.log(getFactorial(5))


// 3) Icerisinde name, surname, age, email olan bir nece student objectleriniz var.
//  Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.

let stu1={
    name:"Cahandar",
    surname:"Velibeyli",
    age:26,
    email:"caho@gmail.com"
}

let stu2={
    name:"Ismayil",
    surname:"Yusifov",
    age:24,
    email:"ismayil@gmail.com"
}

let stu3={
    name:"Nurlan",
    surname:"Mecidli",
    age:18,
    email:"nurlan@gmail.com"
}

let stu4={
    name:"Ceyhun",
    surname:"Abbasov",
    age:22,
    email:"ceyhun@gmail.com"
}

let students=[stu1,stu2,stu3,stu4];

// 1) Yashi 18-25 araliginda olan telebelerin sayi.

// function getByAge(arr) {
//     let count = 0;
//     arr.forEach(element => {
//         if (element.age > 18 && element.age < 25) {
//             count++;
//         }
//     });
//     console.log(count);
// }

// getByAge(students);


// 2) Emailinde "c" herfi olan studentlerin sayi.

// function getByEmail(arr){
//     let count=0;
//     arr.forEach(element => {
//         if(element.email.includes("c")){
//             count++;
//         }
//     });

    
//     console.log(count)
// }

// getByEmail(students)


// 4) Gelen yasha gore hansi ilden olduqugunu gosteren function yazin. 
// Meselen 30 gelirse function geriye 1993 qaytarmalidir.

// --------

