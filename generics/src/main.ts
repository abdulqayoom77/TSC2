function kuchBhi<T>(arg:T):T{
    return arg
}

const result = kuchBhi<string>("hello");
const result2 = kuchBhi<number>(123);
const result3 = kuchBhi<boolean>(true);

console.log(result);


interface Box<T> {
  value: T;
}

let stringBox: Box<string> = { value: "Hello" };
let numberBox: Box<number> = { value: 123 };


type KeyValuePair<K, V> = {
  key: K;
  value: V;
};

let pair: KeyValuePair<string, number> = { key: "age", value: 30 };