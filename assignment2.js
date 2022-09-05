//NESTED ARRAY
let arr1=[1,[2,3],[7,[4,8]]]
let arr2=[...arr1];    //clonning whole arr1
let arr3=[...arr1[1]]  //clonning 2 level nested array 
let arr4=[...arr1[2]]  
let arr6=[...arr4[1]]  //clonning 3 level nested array
console.log(arr2)
console.log(arr3)
console.log(arr4)
console.log(arr6)


//NESTED OBJECT
let cars={Toyota:{Corolla:{milage:21,price:999822},yaris:{milage:19,price:870221}},Honda:{CRV:{milage:16,price:7109873},sedan:{milage:23,price:7987230}}}

let obj={...cars}    //Clonning object
console.log(obj)

let {Toyota:{Corolla:{...remain}}}=cars   //  getting 3 level Nested Object
console.log(remain)