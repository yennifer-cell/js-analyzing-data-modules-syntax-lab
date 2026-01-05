// Step 0: Require datejs
const Datejs = require('datejs'); // just require once at the top

// Step 1: Create the combineUsers function
function combineUsers(...args) {
    // Step 2: Initialize the return object
    const combinedObject = {
        users: []
    };

    // Step 3 & 4: Loop through args and merge arrays
    for (const userArray of args) {
        combinedObject.users.push(...userArray); // spread operator merges arrays
    }

    // Step 5: Get today's date in M/d/yyyy format
    const today = new Date();
    combinedObject.merge_date = today.toString("M/d/yyyy");

    // Step 7: Return the combined object
    return combinedObject;
}

// Example usage:
const array1 = ["alice", "bob"];
const array2 = ["charlie", "dave"];
const array3 = ["eve"];

const result = combineUsers(array1, array2, array3);
console.log(result);
