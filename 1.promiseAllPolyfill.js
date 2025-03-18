const myPromiseAll = (tasksArray) => {
  return new Promise((resolve, reject) => {
    const output = [];
    if (tasksArray.length === 0) resolve([]);
    tasksArray.forEach((promise, index) => {
      promise
        .then((data) => {
          console.log(`data is ${data}`);
          output[index] = data;
          console.log(output);
          if (index === tasksArray.length) resolve(output);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("ppp"), 1000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Smriti"), 500)
);

const tasksArray = [promise1, promise2, promise3];

myPromiseAll(tasksArray)
  .then((data) => {
    console.log(`the output is ${data}`);
  })
  .catch((err) => {
    console.log(`the error is ${err}`);
  });
