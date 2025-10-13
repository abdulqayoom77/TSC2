// Assertions

// type Assertions in detail

// let num = 10
// let num2 = "10"

const element = document.getElementById("username") as HTMLInputElement;

// TypeScript type: HTMLElement | null
// But you KNOW it’s an input element.
// const input = element as HTMLInputElement;
element.value = "Abdul"; // ✅ No error now


// let value:any = "hello";

// // Direct assertion ❌
// let num: number = value as number; // Error
// console.log(typeof num);
let value = "abc";
let num = (value as unknown) as number; // ❌ Error



// Double assertion ✅ (forcefully)
let num2: number = (value as unknown as number);
console.log(typeof num2)

let numbe = 10 as number