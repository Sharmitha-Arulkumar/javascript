// Task  5

// 1. Student Registration Form
// Create a program using: prompt(), variables(let,const), console.log()
// Requirements: ask student name, department, age, print all details using template string
// Ex. o/p: Welcome Naveen  Department: CSE  Age: 20

const studentName = prompt("Enter your name");
let studentDepartment = prompt("Enter your department");
let studentAge = prompt("Enter your age");
console.log(`Welcome ${studentName}`);
console.log(`Department: ${studentDepartment}`);
console.log(`Age: ${studentAge}`);

// 2. ATM Withdrawal System
// Use: if else, comparision operators, logical operators
// Requirements: User balance = 10000
// ask withdrawal amount if amount<=balance->"Transaction Successful" Else->"Insufficient Balance"
// Bonus: Minimum withdrawal = 100

let userBalance = 10000;
let withdrawalAmount = prompt("Enter your withdrawal amount");
if(withdrawalAmount <= userBalance && withdrawalAmount >= 100){
    console.log("Transaction Successful");
    
}else if (withdrawalAmount < 100){
        console.log("Minimum withdrawal amount is 100");
        
}else {
    console.log("Insufficient Balance");
    
}

// 3. Swiggy Discount Checker
// Use: ternary operator
// Requirements: if order amount > 499 show "Free Delivery Available" Else: "Delivery Charges Applied"

let orderAmount = 500;
orderAmount > 499 ? console.log("Free Delivery Available"):console.log("Delivery Charges Applied");

// 4. Instagram Login System
// Use: nested if
// Requirements: Correct username = "admin" , Correct password = "1234"
// Conditions: if username correct-> ask password, if password correct->Login Success
// Else-> Wrong Password , Else-> Invalid Username

let usersName = prompt("Enter Username");
if (usersName === "admin"){
    let userPassword = prompt("Enter Password");
    if (userPassword === "1234") {
        alert("Login Success");
    } else {
        alert("Wrong Password");
    }
}else {
    alert("Invalid Username");
}

// 5. Traffic Signal System
// Use: switch statement
// Requirements: Input: red / yellow / green  Output: STOP / READY / GO

let trafficSignal = "yellow";
switch (trafficSignal) {
    case "red": console.log("STOP");
    
        break;
    case "yellow": console.log("READY");
    
        break;
    case "green": console.log("GO");
    
        break;    
    default: console.log("Happy Journey");
    
        break;
}

// 6. Employee Salary Calculator
// Use: function, parameters, return
// Requirements: Create function named salaryCalculation, Parameters: basic salary + bonus, Return total salary
// Example: salaryCalculation(25000,5000), Output: 30000

function salaryCalculation(salary,bonus){
    return salary + bonus;                 
}
console.log("Total Salary:", salaryCalculation(25000,5000));

// 7. E-Commerce Cart Total
// Use: Array, for loop
// Requirements: Store product prices inside array: [100,200,300,400]
// Find: Total price, Average price

let productPrices = [100,200,300,400];
let total = 0;
for(let a = 0; a < productPrices.length; a++){
    total = total + productPrices[a];
}
console.log("Total Price:", total);
let average = total / productPrices.length;
console.log("Average Price:", average);

// 8. WhatsApp Contact Book
// Use: Object, for in loop
// Requirements: Store: name, phone, status
// Print all details dynamically

let whatsappContactBook = {
    contact1: {name: "John", phone: "9854763467", status: "Available"},
    contact2: {name: "Ram", phone: "8587943657", status: "Busy"},
    contact3: {name: "Arjun", phone: "9743875392", status: "Available"}
}

for (let a in whatsappContactBook) {
    let contact = whatsappContactBook[a];
    console.log(a);
    console.log("Name:", contact.name);
    console.log("Phone:", contact.phone);
    console.log("Status:", contact.status);
}

// 9. Movie Ticket Booking
// Use: function, callback function
// Requirements: Create: bookTicket(), payment()
// After booking complete, callback payment function automatically

console.log("Please select the movie name,ticket count and package.");
function payment(ticketCount,ticketAmount) {
    let totalAmount = ticketCount*ticketAmount;
    console.log("Total Amount:", totalAmount);
        
}
function bookTicket(movieName,ticketCount,ticketAmount,callback) {
    console.log("Booking is completed");
    callback(ticketCount,ticketAmount);
}
bookTicket("Aladdin",4,200,payment)   

// 10. Food Delivery Time Tracker
// Use: Generator Function
// Requirements: Show order stages one by one:
// Order Confirmed, Preparing Food, Out for Delivery, Delivered

function*foodDeliveryTracker() {
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}
let tracker = foodDeliveryTracker();
console.log(tracker.next().value);
console.log(tracker.next().value);
console.log(tracker.next().value);
console.log(tracker.next().value);

    
