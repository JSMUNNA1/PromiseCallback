  const promise1= new Promise((res,rej)=>{
    
      res("hello");
      
  })
  const promise2= new Promise((res,rej)=>{
       setTimeout(()=> res("hello2"),2000)
    
    
})
const promise3= new Promise((res,rej)=>{
    
  res("hello3");
  
})



async function  fun(){
         try{
         
           let i= await promise1;
           console.log(i);
          
           
           let i2= await promise2;
           console.log("vvv");
           console.log(i2);
           
         let i3=await promise3;    
           console.log(i3); 
          
         }catch(err){
            console.log(err);
            
         }
}

console.log(fun());


console.log("ABC");
