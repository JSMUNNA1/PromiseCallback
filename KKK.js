// // function a(){
// //    console.log("hii");
   
// // }

// // const v=new a();
// // console.log(v);

// // //

// // let a=10;
// // function b(){
// //     console.log("My Name is Munna");
    
// // }
// // function b(a){
// //       console.log(a);
      

// // }
// //  a=20
// // console.log(a);

// // function c(b){
// //      b(10);
// // }
// // c(b);



// // let {3:a}=[1,2,3,4,5,6];

// // console.log(a);




// function a(a){
// let obj={name:a,
//    talk:function(){
//        console.log(this.name);
       
//    }
// }
//     return obj;
// }

// console.log(a("Chiti").talk());


// const obj={
//       name:'munna',
//       class:'EC1',
//     presentation(){
//          console.log("My name is",this.name,"clas is:",this.class)
//       }
// }

// Object.defineProperties(obj,{
//      GrNo:{
//        value:'18285',
//        writable:true,
//        enumerable:true,
//        configurable:true
//      },
//      Addresss:{
//         value:{
//            city:"gopalGanj",
//             writable:true,
//         },
//         writable:true,
//        enumerable:true,
//        configurable:true
//      }

// }
//)
//console.log(obj);


// const obj={
//        name:'munna',
//        class:'EC1',
//        Presentation:function(){
//            console.log(this.name,this.class);
           
//        },
//        [Symbol.iterator]:function(){
//              yield this.name,
//              yield this.class
//        }
// }

// for(let i of obj){
//     console.log(i);
    
// }

// let s=Symbol("foo");
// let v=Symbol.for("foo")
// let g=Symbol.keyFor(s)

//    console.log(s==v,g);
   



// getUser(function(user) {
   
//  });
//  getProfile(user, function(profile) {
//    getPosts(user, function(posts) {
//      console.log('User:', user);
//      console.log('Profile:', profile);
//      console.log('Posts:', posts);
//    });
//  }); 
// const pro=new Promise((res,reject)=>{
    
      
//       res("munna")
      
// })

// pro.then(function(user){
//       console.log(user);
      
//      return user+'Profile of User';
// }).then(function(prfile){
//    console.log(prfile);
//       return prfile+['ilove india','ki',"jay"];
// }).then(function(posts){
//    console.log(posts);
//      return posts;
// })
 


const p1=new Promise((res,rej)=>{
   setTimeout(()=>{
      
   res("1234")
   },10000)
}
)

   const p2=new Promise((res,rej)=>{
      setTimeout(()=>{
         
      res("5678")
      },5000)
   }
   )
  
async function f2(){
   console.log("start");
   const p=await p1;
   console.log("mid");
   
   const p11=await p2;
   console.log("End");
   

}
f2()