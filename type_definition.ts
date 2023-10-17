let captain = "sakib-al Hasan"

console.log(typeof(captain))

captain = "tamin"
console.log(captain)

//captain = 75; this will not work cz perviously this variable is decleared as a string.

////////////function

function sum(a : number, b : number){
    return a+b;
}
console.log(sum(3,4))

let fruits = ["apple", "papaya", "banana"]

//fruits.push(34)        this is not possible cs array is defined as string

let car = ["toyata", 342, "premio", {}]   // this is mixed type definition

car.push(2020)
car.push(
    {name: "honda"}
)
console.log(car)


// in object data type definition is fixed

let person={
    name : "Ruble",
    age: 34,
    number: 50

}

//person.name = 40 // this is not possible cz name is defined string in the person object

person.name = "sakib75"  // this is ok
console.log(person)

