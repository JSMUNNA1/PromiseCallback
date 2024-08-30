const obj={
    name:"munna",
    age:20,
    *[Symbol.iterator](){
          yield this.name;
         yield this.age;
    }
}
const obj2={}
for(let {1:key,0:value} of Object.entries(obj)){
     console.log(key,value)
     {
        let k=`${key}`;
           console.log(k);
           
           
      obj2[key]=value;
     }
}
console.log(obj2);

