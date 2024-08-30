const promise=new Promise(function fun(res,rej){
       res("Resoved su");

})




  async function sub(){
     const  data=await promise.then(function f2(data){
           return data;
       })
       return data;
  }
    let data= sub();
  console.log(data);