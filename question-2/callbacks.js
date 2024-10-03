

const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = {'message': 'delayed success!'};
            resolve(success);
        }, 500);
    });
}


const rejectedPromise = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                throw new Error('error: delayed exception!');
            } catch(e) {
                reject(e);
            }
        }, 500);
    });
}

console.log("Calling resolvedPromise...");
resolvedPromise().then(s => console.log(s));
console.log("Calling rejectedPromise...");
rejectedPromise().catch(e => console.error(e));