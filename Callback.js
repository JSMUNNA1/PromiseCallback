// 



//promise

let promise=new Promise((res,rej)=>{
   
   rej("dd")
    res("Order start")
   
})
 promise.then(order)
 .then(payment)
 .then(paymentSlip)
 .catch(()=>console.log("Err")
 )
 .finally(()=>console.log("thankyou"))


//console.log(data)
setTimeout(function fad(){
    console.log("1112");
    
},0)

function order(data){
    console.log("order done"+data);
    return 'order'
}
function payment(data){
   console.log(data);
   return 'payment done'
}
function paymentSlip(data){
   console.log(data);
   return 'payment slip Generated'
}