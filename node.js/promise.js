// pending 호출상태
// pulfilled 이행
// rejected 실패

function sayHello() {
    return new Promise((resolve, reject) => {
        // const hello = "Hello Hello";
         resolve("hello!");
        // reject(new Error());
    });
}

sayHello()
  .then((resolveData) => {
    console.log(resolveData);
    return resolveData;
  })
  .then((resolveData) => {
    console.log(resolveData);
    return resolveData;
  })
  .then((resolveData) => {
    console.log(resolveData);
  })
  .catch((error) => {
    console.log(error);
  });