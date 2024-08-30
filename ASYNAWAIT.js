async function foo() {
  try {
    const result = await order();
    const newResult = await payment(result);
    const finalResult = await slip(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch (error) {
    failureCallback(error);
  }
}


function order(){
     console.log('order Confirm');
     
  return 'Order Confirm';
      
}
function payment(result){
  console.log("done payment");
  
  return 'Done payment'

}
function slip(res){
    console.log("done slip:");
    
   return 'slip: payment:333300$'   
}

foo();

console.log("munna Thakur");
