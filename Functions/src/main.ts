function sum(a: number, b: number): void {
  console.log(a + b);
}
// sum(10,20);

function sum1(a: number, b: number): number {
  return a + b;
}
// console.log(sum1(10,20));

const sumOrConcat = (a: number, b: number, c: boolean): number | string => {
  if (c) {
    return a + b;
  } else {
    return "" + a + b;
  }
};
// console.log(sumOrConcat(10, 20, true));
// console.log(sumOrConcat(10, 20, false));
// console.log(sumOrConcat(10, 20, Math.random() > 0.5));

function getName(firstName: string, lastName?: string): string {
  if (lastName === undefined) {
    return firstName;
  }
    return firstName + " " + lastName;
    // return lastName ? firstName + " " + lastName : firstName;
    // return `${firstName} ${lastName || ""}`.trim();
}
console.log(getName("Bruce", "Wayne"));
console.log(getName("Madonna"));




// aanother Example

function getName1(firstName: string, lastName = "Smith"): string {
  return firstName + " " + lastName;
}
// console.log(getName1("Bruce", "Wayne"));
// console.log(getName1("Madonna"));
// console.log(getName1("John"));



// another Example

function getName2(firstName: string, ...restOfName: string[]): string {
  return firstName + " " + restOfName.join(" ");
}   
// console.log(getName2("Bruce", "Wayne"));
// console.log(getName2("Madonna"));
// console.log(getName2("John", "F.", "Kennedy", "Doe", "Abdul"));


// another Example

function getName3(firstName: string, ...restOfName: string[]): string {
  return firstName + " " + restOfName.join(" ");
}
// const nameParts:string[] = ["F.", "Kennedy", "Doe", "Abdul"];
// console.log(getName3("John", ...nameParts));
// console.log(getName3("John", "F.", "Kennedy", "Doe", "Abdul"));


