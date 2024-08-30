// async function async1() {
//   console.log('async1 start');
//   await async2();
//   console.log('async1 end');
// }

// async function async2() {
//   console.log('async2');
// }

// console.log('script start');

// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);

// async1();

// new Promise(function(resolve) {
//   console.log('promise1');
//   resolve();
// }).then(function() {
//   console.log('promise2');
// });
// console.log('script end');

// async function foo() {
//     return  Promise.resolve("hi");
// }
// console.log(foo());

// const p = new Promise((res, rej) => {
//   res(1);
// });

// async function asyncReturn() {
//   return p;
// }

// function basicReturn() {
//   return Promise.resolve(p);
// }
// console.log(asyncReturn());
// console.log(basicReturn());

// console.log(p === basicReturn()); // true
// // console.log(p === asyncReturn()); // false
// function foo() {
//   return Promise.resolve(1).then(() => undefined);
// }
// //console.log(foo().then((w)=>console.log(w)));
// foo().then((w)=>console.log(w))
async function foo() {
  const p1 =   new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 =    new Promise((_, reject) => setTimeout(() => reject("2"), 500));
  const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
}
 foo().catch(() => {console.log("Hi");
 });