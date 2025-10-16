// In this program we are going to learn about types in TypeScript


let m = "Hello, World!";

console.log(m);


let op : string;

op = "max";

let l: number = 5;  // type annotation
let k = 6;   // type inference 



function add (a: number , b: number , c = 5){
     return a + b;
}




let age: any = 25;  // any type
age = "hello";  
age = true;
age = {name : "max"};


let u : number | string;  // union type
u = 5;
u = "hello";


let ar = ["key", "max", "john"];  // array of strings
let ar1 : number[] = [1,2,3,4];



let r;
r = 5;
r = "hello";


let s: any[] = [1, "hello", true];  // array of any type

let x : (string | number)[];  // 
x = [1,2,3,"hello"];

let z : Array<string | number>;
z = [1,2,3,"hello"];

let pr : [string, number];  // tuple

let obj: {
    name: string,
    age?: number   // optional property
} = {
       "name" : "max"
}
obj.age = 25;


let val : {} = "not null or undefined";


let rec: Record<string, string | number>;  // record type
rec = {
    name: "max",
    age: 25
}

rec.loc = "india";


enum Role {ADMIN, READ_ONLY, AUTHOR};  // enum type

let role: Role;
role = Role.ADMIN;
role = Role.AUTHOR;
role = 0;
role = 1;


let userrole : "admin" | "user" | "guest";  // literal type
userrole = "admin";
userrole = "user";

let v : [1|-1 , "asc" | "desc"];  // tuple with literal types
v = [1, "asc"];
v = [-1, "desc"];


type Combinable = string | number;  // type alias
type ConversionDescriptor = "as-number" | "as-text";
function combine (input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) : any{
                    return input1 + " " + input2;


                

}



export {};