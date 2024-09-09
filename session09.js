// // ============= Sync 
// console.log("Start");
// let result = longRunningOperation(); // This blocks execution
// console.log(result);
// console.log("End");

// // ============= Async
// coole.log("Start");
// longRunningOperation(result => {
//   console.log(result); // This runs later, doesn't block
// });
// console.log("End");

// ============= Callback Function
// let sampleResult = function sampleFunction(user_name,user_id) {
//     console.log(`Welcome ${user_name} ${user_id}`);
// }
// sampleResult('Ehsan', 1234);


// function fetchData(callback) {
//     setTimeout(() => {
//     let data = { id: 1, name: "John Doe" };
//     callback(data);
//   }, 4000);
// }

// fetchData((data) => {
//   console.log("Data received:", data);
// });

// console.log("Fetching data...");


// ============ Promises
// let myPromise = new Promise((resolve, reject) => {
//   let condition = false;
//   setTimeout(() => {
//     if(condition) {
//       resolve('Promise fulfilled!');
//     } else {
//       reject('Promise rejected!');
//     }
//   }, 2000);
// });

// myPromise
//   .then(result => {
//     console.log(result); // Handles fulfillment
//   })
//   .catch(error => {
//     console.error(error); // Handles rejection
//   });

// // ============ Promises Chaining
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, name: "User " + id });
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Post 1", "Post 2", "Post 3"]);
    }, 1000);
  });
}

// fetchUser(1)
//   .then(user => {
//     console.log("User:", user);
//     return fetchUserPosts(user.id);
//   })
//   .then(posts => {
//     console.log("User's posts:", posts);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });

// // ============ Promises All
let promise1 = Promise.resolve('First');
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Second'), 2000);
});
let promise3 = Promise.resolve('Third');

Promise.all([promise1,promise2,promise3])
  .then(values => {
    console.log(values); // ['First', 'Second', 'Third']
  })
  .catch(error => {
    console.error(error);
  });