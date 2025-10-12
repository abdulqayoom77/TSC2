// type Sum = (a: number, b: number) => {}
// const add:Sum = (a,b) => {
//   return a+b
// }

// console.log(add(1,2));

// interface Add2

// type Add = (a: number, b: number) => number;

// function sum(a: number, b: number) {
//   return a + b;
// }

// const myFunc: Add = sum; // ✅ works fine

// function sum(a:number, b:number):void{
//   console.log(a+b)
// }
// console.log(sum(1,2));\\

// enum PaymentMethod {
//   CreditCard,
//   PayPal,
//   Cash,
// }

// function pay(method: PaymentMethod) {
//   switch (method) {
//     case PaymentMethod.CreditCard:
//       console.log("Paying by card");
//       break;
//     case PaymentMethod.PayPal:
//       console.log("Paying by PayPal");
//       break;
//     case PaymentMethod.Cash:
//       console.log("Paying with cash");
//       break;
//   }
// }

// // Ask user for input
// const userInput = prompt("Enter payment method (CreditCard, PayPal, Cash):");

// // Convert string input to enum value safely
// if (userInput) {
//   const method = PaymentMethod[userInput as keyof typeof PaymentMethod];
//   if (method !== undefined) {
//     pay(method);
//   } else {
//     console.log("Invalid payment method entered!");
//   }
// }

// type User = {
//   name: string;
//   age: number
// }
// const obj: User ={
//   name: "abdul",
//   age: 20
// }
// console.log(obj);

// type name = string | number | boolean

// interface name1{name: string}

// interface Dog {
//   name: string;
// }
// interface Dog {
//   age: number;
// }
// const dog: Dog = {
//   name: "Lucus",
//   age: 6,
// };
// console.log(dog);

// type Dog = {
//     name: string;
// }
// type Dog = {
//     age: number;
// }



