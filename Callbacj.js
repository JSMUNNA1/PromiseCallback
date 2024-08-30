
 //callback
function order(callback) {
  console.log("Order placed");
  callback(null, "Order successful");
}

// Simulated asynchronous task for making a payment
function payment(orderResult, callback) {
  console.log(orderResult); // Display the result from the order function
  console.log("Payment done");
  callback(null, "Payment successful");
}

// Simulated asynchronous task for generating a payment slip
function paymentSlip(paymentResult, callback) {
  console.log(paymentResult); // Display the result from the payment function
  console.log("Payment slip generated");
  callback(null, "Payment slip generated successfully");
}

// Start the process
order(function(orderErr, orderResult) {
  if (orderErr) {
    console.error('Error placing order:', orderErr);
  } else {
    payment(orderResult, function(paymentErr, paymentResult) {
      if (paymentErr) {
        console.error('Error processing payment:', paymentErr);
      } else {
        paymentSlip(paymentResult, function(paymentSlipErr, paymentSlipResult) {
          if (paymentSlipErr) {
            console.error('Error generating payment slip:', paymentSlipErr);
          } else {
            console.log(paymentSlipResult);
          }
        });
      }
    });
  }
});
   ///promise 