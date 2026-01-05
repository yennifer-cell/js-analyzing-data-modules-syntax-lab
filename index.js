// index.js

// Step 0: Require datejs
const Datejs = require('datejs');

// Step 1: Create the combineUsers function
function combineUsers(...args) {
    // Step 2: Initialize the return object with merged users and merge date
    const combinedObject = {
        users: args.flat(), // Merge all arrays into one
        merge_date: new Date().toString("M/d/yyyy") // Today's date in M/d/yyyy format
    };

    // Step 7: Return the combined object
    return combinedObject;
}

// Export the function if it exists (starter code)
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};



