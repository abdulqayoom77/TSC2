let num: number = 123;
console.log(num);

let str: string = "Hello, TypeScript";
console.log(str);

let bool: boolean = true;
console.log(bool);

// let nme  = 'Abdul'
// nme = 123

let nme: any = true;
nme = 123;
console.log(nme);

let arr1: number[] = [1, 2, 3, 4, 5];
console.log(arr1);


let empty: null = null;
let undef: undefined = undefined;

console.log(empty);
console.log(undef);
let undefi:undefined;
console.log(undefi);


let tpl:[(string|number),number,boolean] = [1,23,true]
console.log(tpl);

let arrWithUnion:(string|number|boolean)[] = ['Abdul',23,true]

let numStr : (number|string)[]  = [1,2,3,'4','5']
let arr : number[] = [1,2,3,4,5]
let strArr : string[] = ['1','2','3','4','5']
console.log(strArr);
// let age: number | string;
// age = 23;
// age = "Twenty Three";
// age= true
// console.log(age);


let obj1: { name: string|number ; age: any } = { name: "true", age: 12 };
console.log(obj1);