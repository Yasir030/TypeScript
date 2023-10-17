// declaring function type
let myFunc: Function;

myFunc = (a: number, b:number)=>{
    console.log(a*b)
};

myFunc(5,5);

const func =(a: string, b: string, c?:string)=>{
    console.log(`my first name is ${a} and last name is ${b}`)
};

func("yasir","arafat");