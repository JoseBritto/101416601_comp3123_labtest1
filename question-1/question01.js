

const lowerCaseWords = (inputArray) => {
    return new Promise((resolve, reject) => {
        if(Array.isArray(inputArray) === false || inputArray.length === 0){
            reject("Got an input that is not a non-empty array");
            return;
        }

        resolve (inputArray
        .filter(x => typeof x === "string")
        .map(x => x.toLowerCase()));
    });
}


// Execute!!
let mixedArray = ['Pizza', 10, true, 25, false, 'Wings'];
console.log('Input: ' + mixedArray);
console.log("Output:")
lowerCaseWords(mixedArray)
.then(x => console.log(x))
.catch(e => console.log(e));