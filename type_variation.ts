//variable can contain mutilple of data types
let b: string | number;

// array can contain mutilple of data types
let arr: (string | number)[]= [];

arr.push("arafat", 30, "engineer")
console.log(arr)

// any or dynamic type decleration
//let a; or
let a :any; 
a.push("I love palestine")
a.push(100)

let obj: {
    name: any,
    location: any
};

obj = {    // must have to have the same property
    name : "smair",
    location : "dhaka"
}


