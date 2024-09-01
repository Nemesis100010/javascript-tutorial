//Primitive
//7 types : String , Number , Boolean , null , undefined, Symbol, BigInt
//Reference (non-primitive)
//Array, objects, functions
const ousideTemp = null
const bigNumber = 347658955456345n
const heros = ["Saktiman","naagraj","doga"];
console.log(heros)
let myObj = {
    name : "som",
    age:22
}
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);//bigint
console.log(typeof myFunction);//function
console.log(typeof myObj);//object
console.log(typeof ousideTemp);//object 
console.log(typeof heros);//object

// stack (primitive)
let myFavsub = "physics"
let anothersub = myFavsub
anothersub = "chemistry"
console.log(anothersub); // stack memory copies the value of variable
console.log(myFavsub);   // don't change the original value

//heap(non-premitive)
let userOne = {
    email : "user1@gmail.com",
    upi : "user1@ybl"
}
let userTwo = userOne
userTwo.email = "user2@gmail.com"
console.log(userOne.email); // here the original value changed because in heap 
// memory two objects have same reference





