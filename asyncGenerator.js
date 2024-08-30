// async function* foo() {
//   yield Promise.reject(1);
// }

// foo()
//   .next()
//   .catch((e) => console.error(e));
//   let i=0;
// let p1=new Promise((res,rej)=>{
//      setTimeout(()=>res(i++),2000)
// })
//   function ab(){
//      for(let i=0;i<5;i++){
      
//       var c= p1.then((res)=>res);
         
        
        
//      }
//      console.log(c);
// }

// ab();
// let arr=[1,2,3,3,4,5,6,6]
//   async function res(ele){
//     let p1=  await new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(ele);
//         resolve();
//       }, 1000);
//     });
//    }
//  async function process() {
//        arr.forEach(res)
// }

// process();
// // console.log(123);

// // for (var i = 0; i < 100; ++i) {
// //   let result = await some_slow_async_function();
// //   do_something_with_result(result);
// // }






// function*fun(a){
//      yield a++;
//      yield a++;
// }

// const a=fun(1);
// let  data=a.next();
//   while(!data.done){
//        console.log(data.value);
//        data=a.next();
       
//   }

   



async function process() {
  const array = [0, 1, 2, 3, 4];
          
  array.forEach(async (i) => {
    let result = await new Promise((resolve) => {
      setTimeout(() => {
        console.log(i);
        resolve();
      }, 2000);
    });
    console.log(result);
  });
}

process();













