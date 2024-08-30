function EnterCard(callback){
    console.log("Card Insert");
    
    callback(null,'card Insert')

}

function EnterPin(callback){
      console.log("pin correct");
      callback(null,'pin correct');
}

function done(callback){
  console.log("Transaction Done");
  callback(null,'Transaction Done');
}


EnterCard(function(err,pakka){
     EnterPin(function (err,pakka){
          done(function(err,pakka){
            console.log("Alll done");
            
          })
     })
})