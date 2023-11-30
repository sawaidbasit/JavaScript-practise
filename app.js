// let table = 7;
// for (let i = 1; i <= 10; i++) {
//     const element = table*i;
//     console.log(`${table} X ${i} = ${element}`)
// }

// let array = [2,5,7,9,3,2,6,8];
// const filetrArray = array.filter(number =>{
//     return(
//         number % 2===0
//     )
// })
// console.log(filetrArray)

// let array = [2,5,7,9,3,2,6,8];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] %2=== 0) {
//         console.log(array[i], " This Number is Even")
//     } 
//     else{
//         console.log(array[i], " This Number is ODD")
//     }
// }

// const fruits = ["Apple", "banane","Mango"];
// console.log(fruits.length)

// async function logMovies() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const movies = await response.json();
//     console.log(movies);
//   }
// logMovies()  

// async function apiData() {
//     const fetchdata = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await fetchdata.json();
//     console.log(data);
// }

// apiData()


// const obj=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             alert("hi...");
//             resolve("promise successfull");
//     },2000)
// })

// obj.then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })

// const str = "Sawaid";
// const splitStr = str.split("").reverse().join('');
// console.log(splitStr)

// let input = document.getElementById("taskInput");
// let taskList = document.getElementById("taskList");

// function addTask() {
//     let arr =[];
//     let list = document.createElement("li");
//     list.append(taskList);
//     let span = document.createElement("span");
//     span.append(list);
    
// }

// let  nums = [1,3,5,6];
// for (let i = 0; i < nums.length; i++) {
//     const element = nums+1;
//     console.log(element)
// }


// My Task

// sab se pehle ek Array k ander Number Add karne hai uske bad Un Numbers ko Plus 1 karwana hai aur ek variable k 
// ander save karwana hai uske bad mujhe us Array aur Varible se Find ka method lagana hai aur Jo Number Find nai 
// hongy uske bad ek Object banana hai aur object ki key ma Missing Number Araha tha aur Value me Index Number
// ahraha tha
// let  nums = [1,3,5,6];
// let number = [1,2,3,4,5,6];
// for (let i = 1; i < number.length; i++) {
//     let NumberElem = number[i]
//     for (let i = 1; i < nums.length; i++) {
//         let numsElem = nums[i]
//         console.log(numsElem, NumberElem)
        // if (NumberElem == numsElem) {
        //     console.log("Matched")
        // } else{
        //     console.log("Not Matched", NumberElem)
        // }
    // }
// }

// for (let i = 0; i <=nums.length; i++) {
// console.log(nums[i])    
// }





// Table with Loop
// let table = 5;
// for (let i = 1; i <= 10; i++) {
//     let multiply = table*i
//     console.log(`${table} X ${i} = ${multiply}`);   
// }


// For loop ka istemal karke, har ek number ko do guna karke print karein.

// for (let i = 1; i <= 10; i++) {
//     console.log(i+i)    
// }

// Ek array (list) banao, jisme 5 alag-alag strings shamil hain.
// let array = ["Sawaid", "Basit", "John","Spider","Albert"];
// console.log(array);

// For loop ka istemal karke, har ek string ko ek saath likh kar console par print karo.
// let array = ["Sawaid", "Basit", "John","Spider","Albert"];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
    
// }

// Ek array banao, jisme 5 alag-alag numbers shamil hain.
// let arr = [2,3,5,7,8];

// For loop ka istemal karke, har ek number ko 3 se multiply karke console par print karo.
// let arr = [2,3,5,7,8];
// for (let i = 0; i <= arr.length; i++) {
//     console.log(arr[i]*3)
// }

// Ek array banao, jisme 6 alag-alag integers shamil hain.
// let array = ["Sawaid", "Basit","John","Albert", "Spider", "Batman"];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i].split("").reverse().join(""))
// }

// Ek array banao, jisme 7 alag-alag strings hain.
// For loop ka istemal karke, har ek string ko uppercase mein convert karke console par print karo.
// let array = ["sawaid", "basit","john","albert", "spider", "batman"];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i].toUpperCase())
// }

// Ek array banao, jisme 4 alag-alag numbers hain.
// For loop ka istemal karke, array ke har ek number ko square karke console par print karo.
// let arr = [5,8,9,10,20];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]*arr[i])    
// }


// Operators k task 
// Ek variable num1 mein koi number assign karo.
// Ek variable num2 mein doosra number assign karo.
// Arithmetic operators ka istemal karke num1 aur num2 ko add, subtract, multiply, aur divide karo.
// Result ko console par print karo.

// let num1 = 5;
// let num2 = 8;
// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)

// Ek variable isGreaterThan mein comparison operator ka istemal karke check karo ki num1 num2 se bada hai ya nahi. Agar bada hai toh "num1 is greater than num2" print karo, warna "num1 is not greater than num2" print karo.
// Ek variable isEqual mein comparison operator ka istemal karke check karo ki num1 num2 ke equal hai ya nahi. Agar equal hai toh "num1 and num2 are equal" print karo, warna "num1 and num2 are not equal" print karo.

// let num1 = 8;
// let num2 = 5;
// if (num1 > num2) {
//     console.log("Greater")
// } else{
//     console.log("Less Then")
// }

// Ek function banayein jiska naam greet ho.
// Is function mein ek parameter ho, name.
// Function ko istemal karke, console par "Hello, [name]!" likhein.
// Ek variable mein kisi bhi naam ko assign karein.
// greet function ko call karke assigned naam ko function ke through greet karein.

// let username = "sawaid"
// function greet(name) {
//     console.log("Hello", name)
// }
// greet(username)

// Ek function banayein jiska naam calculateSum ho.
// Is function mein do parameters ho, num1 aur num2.
// Function ko istemal karke, num1 aur num2 ko add karein.
// Calculate ki gayi sum ko return karein.
// Ek variable mein koi bhi do numbers assign karein.
// calculateSum function ko call karke result ko console par print karein.

// function calculateSum(num1,num2) {
//     let result = num1 + num2
//     console.log(result);
//     return(result)
// }

// calculateSum(8,5)

// Bonus:
// 7. Ek aur function banayein jiska naam isPositive ho, jo ek number ko parameter ke roop mein accept kare. Yeh 
// function check kare ki number positive hai ya nahi. Agar positive hai toh "It's positive" print kare, warna 
// "It's not positive" print kare.

// Yeh task aapko functions, parameters, return statements, aur conditionals ka istemal karne mein madad karega. Agar 
// kuch samajh nahi aaye ya koi confusion ho, toh pooch sakte ho. Happy coding!

// function isPositive(num) {
//     if (num > 0) {
//         console.log(num,"is Positive")
//     } else{
//         console.log("Not Positive")
//     }
//     return num;
// }

// isPositive(Number(prompt("Please Enter a Number")))

// Ek function banayein jiska naam reverseString ho.
// Is function mein ek parameter ho, str (string).
// Function ko istemal karke, str string ko ulta karke return karein.
// Ek variable mein koi bhi string assign karein.
// reverseString function ko call karke result ko console par print karein.

// function reverseString(str) {
//   let reverse = str.split("").reverse().join("");
//     console.log(reverse)
// }

// reverseString("SAWAID")

// Bonus:
// 6. Ek aur function banayein jiska naam isPalindrome ho, jo ek string ko parameter ke roop mein accept kare. 
// Yeh function check kare ki string palindrome hai ya nahi. Agar palindrome hai toh "It's a palindrome" print kare,
// warna "It's not a palindrome" print kare.

// function isPalindrome(str) {
//     let palindrome = str.split("").reverse().join("");
//     if (palindrome == str) {
//         console.log("Its Palindrome")
//     } else{
//         console.log("Not Palindrome")
//     }
// }

// isPalindrome("121")

// Ek function banayein jiska naam calculateAverage ho.
// Is function mein ek parameter ho, numbers (array of numbers).
// Function ko istemal karke, numbers array ke average ko calculate karein.
// Calculate ki gayi average ko return karein.
// Ek variable mein koi bhi numbers ka array assign karein (e.g., [10, 20, 30, 40, 50]).
// calculateAverage function ko call karke result ko console par print karein.


// function calculateAverage(num) {
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum+= num[i]
//     }
//     console.log(sum)
//     return sum;
// }

// let numbers = [10,20,30,40]
// calculateAverage(numbers)

// Bonus:
// 7. Ek aur function banayein jiska naam findMax ho, jo ek array of numbers ko parameter ke roop mein accept kare. 
// Yeh function find kare ki array mein kaunsa sabse bada number hai, aur use console par print kare.
// Yeh task aapko functions aur arrays ke saath kaam karne mein madad karega. Agar kuch samajh nahi aaye ya koi 
// confusion ho, toh pooch sakte ho. Happy coding!

// function findMax(num) {
//     let max = num[0];
//     for (let i = 0; i < num.length; i++) {
//         max = Math.max(max,num[i])
//     }
//     console.log(max);
//     return max;
// }
// let number = [10,20,30,70,40];
// findMax(number)


// Ek function banayein jiska naam reverseArray ho.
// Is function mein ek parameter ho, arr (array of elements).
// Function ko istemal karke, arr array ke elements ko ulta karke return karein.
// Calculate ki gayi reversed array ko console par print karein.
// Ek variable mein koi bhi array assign karein (e.g., [1, 2, 3, 4, 5]).
// reverseArray function ko call karke result ko console par print karein.

// let number = [10,20,30,70,40];
// if (number[0] == 10) {
//     alert("matched")
// } else{
//     alert("! Not Matched")
// }

// Higher Order Functions (forEach, map, filter, find, some)
// Callbacks
// Asynchronous Programming (try/catch, async/await, then/catch)
// calling an api (fetch https://jsonplaceholder.typicode.com/todos) website -> https://jsonplaceholder.typicode.com/
// Promises

// Task 1 (forEach):
// Ek array banayein jisme kuch numbers hain.
// forEach ka istemal karke har ek number ko console par print karein.

// let arr = [1,2,4,7,4,3,9];
// arr.forEach((elm)=>{
//     console.log(elm)
// })

// Task 2 (map):
// Ek array banayein jisme kuch numbers hain.
// map ka istemal karke har ek number ko double karke ek naye array mein store karein.
// Naya array ko console par print karein.

//     let arr = [1,2,4,7,4,3,9];
//    let doubleArray =  arr.map((element)=>{
//         return element + element
//     })
//     console.log(doubleArray);

// Task 3 (filter):
// Ek array banayein jisme kuch numbers hain.
// filter ka istemal karke sirf even numbers ko ek naye array mein store karein.
// Naya array ko console par print karein.

//     let arr = [1,2,4,7,6,3,9];
//    let filterArray = arr.filter((elem)=> elem %2==0)
//    console.log(filterArray);

// Task 4 (find):
// Ek array banayein jisme kuch numbers hain.
// find ka istemal karke pahla odd number ko console par print karein.

// let array = [5,2,83,9,4];
//  array.find(checkODDNumber);
//  function checkODDNumber(num) {
//     if (num %2!=0) {
//         console.log(num);
//     }
//  }
 
// Task 5 (some):
// Ek array banayein jisme kuch numbers hain.
// some ka istemal karke check karein ki kya array mein koi even number hai ya nahi. Agar hai toh "Yes, there is at 
// least one even number" print karein, warna "No even number found" print karein.

// let arr = [1,2,65,37,9,5,];
// let even = (element) => element %2==0;
// if (arr.some(even)) {
//     console.log("Yes, there is at least one even number")
// } else{
//     console.log("No even number found")
// }


let  nums = [1,3,5,6];
console.log(nums[0])