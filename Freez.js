// let a={
//     c:20,
//     b:30
// }

// Object.freeze(a);
//  a.c=200

//  console.log(a);
 let obj={
      c:20,b:200
 }

 Object.seal(obj);
 obj.c="ff"
obj.g=22
 console.log(obj);
 