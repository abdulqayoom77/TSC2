// class BiscuitBananeKiRecipe {
//   //   name: string;
//   //   weight: string;

//   constructor(public name: string, public weight: string) {
//     this.name = name;
//     this.weight = weight;
//   }
//   eat() {
//     console.log(
//       `jis me dam hai kam khae ${this.name} biscuit jisme hai dam ${this.weight} jitna. `
//     );
//   }
// }

// const p1 = new BiscuitBananeKiRecipe("Tiger", "23gram");
// const p2 = new BiscuitBananeKiRecipe("Super", "23gram");
// const p3 = new BiscuitBananeKiRecipe("Super", "23gram");
// const p4 = new BiscuitBananeKiRecipe("Super", "23gram");
// // p1.eat();
// // p3.eat();
// // p4.eat();
// // p2.eat();

// // class BankAccount {
// //   private _balance: number = 0;
// //   get balance(): number {
// //     return this._balance;
// //   }
// //   set balance(value: number) {
// //     if (value < 0) throw new Error("Balance can't be negative");
// //     this._balance = value;
// //   }
// // }

// // // const acc = new BankAccount();
// // // acc.balance = 1000; // calls setter
// // // console.log(acc.balance); // calls getter
// // const acc = new BankAccount();

// // console.log(acc.balance);
// // acc.balance = 10000;
// // console.log(acc.balance);



// // class Car {
// //   constructor(public name:string){}
// //   drive():void{
// //     console.log(`${this.name} can walk`);
// //   }
// // }

// // const car1 = new Car("Ford");
// // car1.drive()

// // class Truck extends Car {
// //   haveMoreWheels(){
// //     console.log(`${this.name} can drive and has more wheels`);
// //   }
// // }


// // Base class — shared properties & methods
// class User {
//   constructor(
//     public id: number,
//     public name: string,
//     public email: string
//   ) {}

//   login() {
//     console.log(`${this.name} logged in.`);
//   }

//   logout() {
//     console.log(`${this.name} logged out.`);
//   }
// }
// class Customer extends User {
//   private orders: string[] = [];

//   placeOrder(item: string) {
//     this.orders.push(item);
//     console.log(`${this.name} ordered: ${item}`);
//   }

//   viewOrders() {
//     console.log(`${this.name}'s orders:`, this.orders);
//   }
// }
// class Admin extends User {
//   private users: User[] = [];

//   addUser(user: User) {
//     this.users.push(user);
//     console.log(`${this.name} added user: ${user.name}`);
//   }

//   listUsers() {
//     console.log(`${this.name}'s managed users:`);
//     this.users.forEach(u => console.log(`- ${u.name}`));
//   }
// }
// const john = new Customer(1, "John Doe", "john@example.com");
// john.login();
// john.placeOrder("Laptop");
// john.placeOrder("Mouse");
// john.viewOrders();
// const john2 = new Customer(1, "John2", "john2@example.com");
// john2.login();
// john2.placeOrder("Laptop");
// john2.placeOrder("Mouse");
// john2.viewOrders();

// const admin = new Admin(2, "Alice Admin", "admin@example.com");
// const admin2 = new Admin(3, "Ali Admin", "admin2@example.com");
// admin2.addUser(john2);
// admin2.listUsers();




// class Clothes {
//   constructor(public name: string) {}
// }

// class WinterCollectionClothes extends Clothes{

//   constructor(public name: string, public suitableFor:string){
//     super(name)
//   }
//   benefits(){
//     console.log(`${this.name} is suitable for ${this.suitableFor}`);
//   }
// }

// // const clothes = new Clothes('KUCH BHI')
// const winterClothes = new WinterCollectionClothes('KUCH BHI', 'Winter');
// // winterClothes.suitableFor('winter')
// winterClothes.benefits();




// class MathUtils {
//   static PI = 3.14159;

//   static add(a: number, b: number) :number{
//     return a + b;
//   }
// }

// console.log(MathUtils.PI);
// console.log(MathUtils.add(2, 3));





// abstract class Shape {
//   constructor(public color: string) {}

//   abstract getArea(): number; // must be implemented by subclass

//   describe() {
//     console.log(`A ${this.color} shape.`);
//   }
// }

// class Square extends Shape {
//   constructor(color: string, public side: number) {
//     super(color);
//   }

//   getArea(): number {
//     return this.side * this.side;
//   }
// }

// // const abs = new Shape()

// const sq = new Square("red", 5);
// sq.describe();
// console.log("Area:", sq.getArea());




abstract class Vehicle {
  constructor(public brand: string, protected year: number) {}
  abstract start(): void;
}

// const Vehicle1 = new Vehicle()
// const Vehicle1 = new Vehicle()
// const Vehicle1 = new Vehicle()
// const Vehicle1 = new Vehicle()

class Car extends Vehicle {
  private mileage = 0;
  static totalCars = 0;

  constructor(brand: string, year: number, public model: string) {
    super(brand, year);
    Car.totalCars++;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }

  drive(km: number) {
    this.mileage += km;
    console.log(`Driven ${km} km. Total mileage: ${this.mileage}`);
  }

  static showTotalCars() {
    console.log(`Total cars: ${Car.totalCars}`);
  }
}

const car1 = new Car("Honda", 2020, "Civic");
car1.start();
car1.drive(100);
Car.showTotalCars();
const car2 = new Car("Audi", 2022, "R8 E-Tron");
car2.start();
car2.drive(200);
Car.showTotalCars();