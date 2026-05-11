//Task 1

//Section 1: Variables 

//Q1
var a = 10;
a = 15;
console.log(a);            //Ans: 15

//Q2
let b = 20;
//let b = 30;              //Ans: syntax error does not accept reDeclaration

//Q3
const c = 50;
console.log(c);            //Ans: 50

//Q4
const x = 10;
//x = 20;                  //Ans: Type error does not accept reuse and reInitialization

//Q5
var p = 5;
var p = 10;
console.log(p);            //Ans: 10

//Q6
let q = 25;
q = q + 10;
console.log(q);            //Ans: 35

//Q7
const r = 7;
console.log(r + 3);        //Ans: 10

//Q8
var a = 10;                //Ans: var only accepts reDeclaration

//Section 2: Console Methods

//Q9 Which method prints normal output?
console.log();

//Q10 Which method shows warning?
console.warn();

//Q11 Which method shows error?
console.error();

//Q12 What does this do?
console.clear();                //Ans: console will be cleared

//Section 3: Data Types

//Q13
let a1 = "hello";
console.log(typeof a1);         //Ans: string

//Q14
let b1 = 100;
console.log(typeof b1);         //Ans: number

//Q15
let c1 = false;
console.log(typeof c1);         //Ans: boolean

//Q16
let d;
console.log(d);                 //Ans: undefined

//Q17 What is type of null?
let d1 = null;
console.log(typeof d1);         //Ans: object

//Q18 Convert string to number: "25"
let str = "25";
let num = Number(str);
console.log(typeof str);
console.log(typeof num);

//Section 4: Arrays

//Q19 Create an array of three fruits.
let fruits = ["apple","grape","banana"];

//Q20 Output?
let arr = ["a","b","c"];
console.log(arr[1]);                 //Ans: b

//Q21 Output?
let arr1 = ["x","y","z"];
console.log(arr1[arr1.length-1]);    //Ans: z

//Q22 How to get first element?
console.log(arr1[0]);                //Ans: using index

//Q23 Output?
let arr2 = ["apple","banana"];
console.log(arr2.length);            //Ans: undefined

//Q24 Add new element to array.
arr2 = ["apple","banana","orange"];
console.log(arr2);

//Section 5: Objects

//Q25 Create object with name & age.
let obj = {
    name: "Sharmitha",
    age : 25
};

//Q26 Output?
console.log(obj.name);               //Ans: Sharmitha

//Q27 Output?
let obj1 = {
    fruits: ["apple","banana"]
};
console.log(obj1.fruits[1]);         //Ans: banana

//Q28 How to access last element inside object array?
console.log(obj1.fruits[obj1.fruits.length-1]);
console.log(obj1.fruits[1]);

//Section 6: Arithmetic Operators

//Q29
console.log(5 + 3);                  //Ans: 8

//Q30
console.log(10 % 3);                //Ans: 1 

//Q31
console.log(2 ** 3);                //Ans: 8

//Q32
console.log(10 / 2);                //Ans: 5

//Section 7: Increment/Decrement

//Q33
let a2 = 5;
a2++;
console.log(a2);                   //Ans: 6

//Q34
let b2 = 5;
let c2 = b2++;
console.log(b2,c2);               //Ans: 6,5

//Q35
let x1 = 5;
let y = ++x1;
console.log(x1,y);               //Ans: 6,6

//Q36
let m = 3;
let n = m--;
console.log(m,n);

//Section 8: Comparison & Logical

//Q37
console.log(5 == "5");          //Ans: true

//Q38
console.log(5 === "5");         //Ans: false

//Q39
console.log(true && false || true);   //Ans: true

//Section 9: Ternary 

//Q40
5 > 3 ? console.log("Yes") : console.log("No");   //Ans: Yes






//Task 2 - Type Casting & Flow Control

//1. Output and datatype

console.log("10" + 5);                      //105
console.log(typeof("10" + 5));              //string
console.log(10 + true);                     //11
console.log(typeof(10 + true));             //number
console.log(false + null);                  //0
console.log(typeof(false + null));          //number
console.log("Hello" + undefined);           //Helloundefined
console.log(typeof("Hello" + undefined));   //string
console.log([1,2] + 5);                     //1,25
console.log(typeof([1,2] + 5));             //string


//2. Implicit Type Casting - examples

//1: string + number

console.log("Hi" + 5);                      //Hi5
console.log(typeof("Hi" + 5));              //string

//2: boolean + number

console.log(false + 5);                    //5
console.log(typeof(false + 5));            //number

//3: array + string

console.log([0,1,2,3] + "4");              //0,1,2,34
console.log(typeof([0,1,2,3] + "4"));      //string

//4: object + number

console.log({a:"5"} + 1);                  //[object Object]1
console.log(typeof({a:"5"} + 1));          //string

//5: null + number
console.log(null + 3);                     //3
console.log(typeof(null + 3));             //number


//3. Explicit Type Casting

//convert the following into number: 
// "500"  true  false  null  "abc"  [100]

console.log(Number("500"));                //500
console.log(Number(true));                 //1
console.log(Number(false));                //0
console.log(Number(null));                 //0
console.log(Number("abc"));                //NaN
console.log(Number([100]));                //100


//4. Boolean Constructor

//check wheather the below values are true or false using boolean().
// ""  "javascript"  0  1  null  undefined [] {}

console.log(Boolean(""));                 //false
console.log(Boolean("javascript"));       //true
console.log(Boolean(0));                  //false
console.log(Boolean(1));                  //true
console.log(Boolean(null));               //false
console.log(Boolean(undefined));          //false
console.log(Boolean([]));                 //true
console.log(Boolean({}));                 //true


//5. Student Pass or Fail

let mark = 45;
if(mark > 35){
    console.log("Pass");

}else{
    console.log("Fail");
    
}
    

//6. Voting Eligibility

let age = 20;
if(age >= 18){
    console.log("Eligible");
    
}else{
    console.log("Not Eligible");
    
}

//7. Greatest Number

let n1 = 50;
let n2 = 80;
let n3 = 30;
if(n1 > n2 && n1 > n3){
    console.log("n1 is greater");
    
}else if(n2 > n1 && n2 > n3){
    console.log("n2 is greater");
    
}else if(n3 > n1 && n3 > n2){
    console.log("n3 is greater");
    
}


//8. Traffic Light System
// using switch statement

let trafficLight = "red";
switch (trafficLight) {
    case "red": console.log("Stop");
    
        break;
    case "yellow": console.log("Ready");
    
        break;
    case "green": console.log("Go");
    
        break;    
    default: console.log("Happy Journey");
    
        break;
}
    

//9. Login System
 
let userName = "admin";
let password = "1234";
if(userName === "admin"){
    if(password === "1234"){
        console.log("Login Success");
        
    }else{
        console.log("Invalid Login");
        
    }
}else{
    console.log("invalid login");
    
}


//10. Session Finder

let hour = 14;
if(hour >= 1 && hour <= 12){
    console.log("Morning");
    
}else if(hour >= 13 && hour <= 15){
    console.log("Afternoon");
    
}else if(hour >= 16 && hour <= 19){
    console.log("Evening");
    
}else if(hour >= 20 && hour <= 24){
    console.log("Night");
    
}else{
    console.log("Check given time");
    
}


//Bonus Challenge

//console.log(true + true)    ===> 2
//console.log("5" - 2)        ===> 3
//console.log("5" + 2)        ===> 52
//console.log(null + 1)       ===> 1
//console.log(undefined + 1)  ===> undefined1
//console.log(Boolean(" "))   ===> false
//console.log(Number(true))   ===> 1




























