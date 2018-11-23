const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('This is my resolved data');
        reject('Somthing went wrong!');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error: ' , error);
});

console.log('after');