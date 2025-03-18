# code2.0. FE Interviews
Java Script important questions related to polyfills, event emitter

1. Polyfills for promise.all

Promise.all is a JavaScript method that takes an array of promises and returns a single promise that resolves when all the input promises have resolved or rejects as soon as one of them rejects.

promise.all([array of tasks / API]).then([data1,data2,data3...]).catch(err=>...err)

 Promise.all is a utility function that takes an array of promises and returns a new promise that fulfills with an array of fulfillment values for the input promises, in the same order as the input promises. If any of the input promises is rejected, the returned promise is rejected with the reason of the first rejected promise. The function should take an array of promises as its parameter and return a new promise.

The polyfill should behave as follows:

If the input array is empty, the returned promise should be immediately fulfilled with an empty array.
If all input promises fulfill, the returned promise should be fulfilled with an array of fulfillment values in the same order as the input promises.
If any of the input promises is rejected, the returned promise should be rejected with the reason of the first rejected promise.

Using mock
```
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results); // Output: [10, 20, 30]
  })
  .catch(error => {
    console.error(error);
  });

```


```
const url1 = "https://jsonplaceholder.typicode.com/todos/1";
const url2 = "https://jsonplaceholder.typicode.com/todos/2";

Promise.all([fetch(url1), fetch(url2)])
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(data => {
    console.log(data); // Output: Array of two JSON responses
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
```  

```
function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

async function run() {
  const results = await Promise.all([
    delay(1000, "One"),
    delay(2000, "Two"),
    delay(1500, "Three"),
  ]);
  
  console.log(results); // Output: ["One", "Two", "Three"] after the longest delay (2s)
}

run();
```
https://www.youtube.com/watch?v=cE93TFIJbVo
https://learnersbucket.com/examples/interview/promise-allsettled-polyfill/
https://www.youtube.com/watch?v=C1W_s99nlis
