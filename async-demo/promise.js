/*
    pending: 대기
    fulfilled: 이행
    rejected: 거절
*/

const p = new Promise((resolve, reject) => {
    // Kick off some async work
    // ...
    setTimeout(() => {
        // resolve(1); // pending => resolve, fulfilled
        reject(new Error('error message')); // pending => reject, rejected
    }, 2000);
});

// promise object
p
.then(result => console.log('Result', result)) // when fulfilled state
.catch(err => console.log('Error', err.message)); // when rejected state