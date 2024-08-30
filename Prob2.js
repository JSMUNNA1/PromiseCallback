// function arrayIteration(array,i){
//       return array[i];
// }


//  function iterator(start,end,step){
//      let current=start;

//         return{
//                next(){
                
//                   if(end-1>current){
//                       current+=step;
//                       let data={value:current,done:false}
//                     return data;
//                   }else{
//                     return {data:current,done:true};
//                   }
//                }
//         }

//  }

// let arr=[2,31,345,32,123,567,322]
//  const iter=iterator(0,arr.length,1);
// let res=iter.next();
   
//  while(!res.done){
//    console.log(arrayIteration(arr,res.value))
//       res=iter.next();
//  }
const arr=[1,2,3,4,5,6,7,8,89]
function fun(arr){
      for(let i=0;i<arr.length;i++){
          console.log(arr[i])
      }
}

function call(arr,fun){
     fun(arr);
}
call(arr,fun) 