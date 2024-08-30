const a={
     name:'munna',
     class:'EC1',
     RollNo:210570107015
}


const b={
     name:'chili',
       zoomId:11,
     __proto__:a,
      [Symbol.iterator]:function*it(){
          for(let i in b){
              yield `${i}=${b[i]}`
          }
      }
}

// for(obj in b){
//   console.log(obj);
  
// }

for(v of b){
   console.log(v);
   
} 


