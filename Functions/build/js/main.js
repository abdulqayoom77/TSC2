"use strict";
function sum(a, b) {
    console.log(a + b);
}
// sum(10,20);
function sum1(a, b) {
    return a + b;
}
// console.log(sum1(10,20));
const sumOrConcat = (a, b, c) => {
    if (c) {
        return a + b;
    }
    else {
        return "" + a + b;
    }
};
// console.log(sumOrConcat(10, 20, true));
// console.log(sumOrConcat(10, 20, false));
// console.log(sumOrConcat(10, 20, Math.random() > 0.5));
function getName(firstName, lastName) {
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
function getName1(firstName, lastName = "Smith") {
    return firstName + " " + lastName;
}
// console.log(getName1("Bruce", "Wayne"));
// console.log(getName1("Madonna"));
// console.log(getName1("John"));
// another Example
function getName2(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
// console.log(getName2("Bruce", "Wayne"));
// console.log(getName2("Madonna"));
// console.log(getName2("John", "F.", "Kennedy", "Doe", "Abdul"));
// another Example
function getName3(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
// const nameParts:string[] = ["F.", "Kennedy", "Doe", "Abdul"];
// console.log(getName3("John", ...nameParts));
// console.log(getName3("John", "F.", "Kennedy", "Doe", "Abdul"));
