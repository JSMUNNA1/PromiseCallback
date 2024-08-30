function convertIntoUpper(str){
      return str.toUpperCase()     
}

function call(callback ,input){
      
  const a=  callback(input);
     return a;
}

  const a=  call(convertIntoUpper,'munna');
  console.log(a);
  

 
 