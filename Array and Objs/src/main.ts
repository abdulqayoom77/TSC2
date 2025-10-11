// Objects in typescript in detail

type Person = {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple
};

// interface Person {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuple
// }

let person: Person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
console.log(person.name);

// let person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuple
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// console.log(person.name);
// console.log(person.role);

// Arrays readOnly
// person.role.push("admin"); // This will work
// person.role[1] = 10; // This will not work
// person.role = [0, "admin", "user"]; // This will not work

let arr: readonly string[] = ["Sports", "Cooking"];

// arr.push("Reading"); // This will not work
// arr[1] = "Reading"; // This will not work
// arr = ["Reading"]; // This will not work
console.log(arr);

// const car: { type: string, mileage?: number } = { // no error
//   type: "Toyota"
// };
// // car.mileage = 2000; // no error
// console.log(car);

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = 50;
nameAgeMap.Mark = 80;
nameAgeMap.Mark = 100;
nameAgeMap.Mark = 54;

// object interface, type and functions

// interface UserDetails2 {
//   name: string;
//   age: number | string;
//   getMessage(): string;
// }

// const user2: UserDetails2 = {
//   name: "Max",
//   age: 30,
//     getMessage() {
//     return `Hello, ${this.name}`;
//     },
// };
// console.log(user2.getMessage());

type UserDetails = {
  name: string;
  age: number | string;
  getMessage(): string;
};

const user: UserDetails = {
  name: "Max",
  age: 30,
  getMessage() {
    return `Hello, ${this.name}`;
  },
};
console.log(user.getMessage());

// type vs interface
// 1. Type can be used to define primitive types, union types, tuple types, whereas interface cannot.
//example
type ID = string | number;
// interface ID1 = string | number; // This will give error



// 2. Interface can be merged, type cannot be merged.
// example
// interface Dog {
//   name: string;
// }
// interface Dog {
//     age: number;
// }
// const dog: Dog = {
//   name: "Lucus",
//   age: 3,
// };
// console.log(dog);

// type Dog = {
//     name: string;
// }
// type Dog = {
//     age: number;
// }


// 3. Type can use computed properties, interface cannot.




// 4. Interface can extend multiple interfaces, type can only extend one type.

// interface Car {
//     name: string;
//     price: number;
// }

// interface Owner extends Car {
//     ownerName : string;
//     age: number;
//     msg() : string;
// }
// let carOwner : Owner = {
//     name: 'Audi',
//     price: 1000000,
//     ownerName: 'Sarwat',
//     age: 21,
//     msg():string {
//         return `${this.name} is owned by ${this.ownerName} bought for ${this.price} and his/her age is ${this.age}`
//     }

// }
// console.log(carOwner.msg())



// type Car = {
//     name: string;
//     price: number;
// }

// type Owner extends Car = {
//     ownerName : string;
//     age: number;
//     msg() : string;
// }
// let carOwner : Owner = {
//     name: 'Audi',
//     price: 1000000,
//     ownerName: 'Sarwat',
//     age: 21,
//     msg():string {
//         return `${this.name} is owned by ${this.ownerName} bought for ${this.price} and his/her age is ${this.age}`
//     }

// }
// console.log(carOwner.msg())

