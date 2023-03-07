// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="text" id="fullname">,
let fn = document.getElementById("fullname");
// <input type="text" id="email">
let em = document.getElementById("email");
// <textarea id="message"></textarea>
let msg = document.getElementById("message");
// <input type="button" id="submit-button">,
let btn = document.getElementById("submit-btn");

// function test() {
//     console.log(msg);
// }

// test();


// Declare variable that will 
// store regular expression for email
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// READY TO START CODING
// Start with your function here
function formValidation () {


    // Declare object that will store the form-data
    let data = {};

    // Declare array that will store the errors
    let errors = [];

    // +-----------+    
    // | FULL NAME |
    // +-----------+
    // Check if full name is not empty.
    if (fn.value) {
        data.fullName = fn.value;
    } else {
        errors.push("Please enter your full name!");
    }
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.


    // +-------+    
    // | EMAIL | 
    // +-------+
    // Check if email is not empty.
    if (em.value) {
        // Conditional created to test if em.value is ok based on the pattern
            if(pattern.test(em.value)){
                data.email = em.value;
            // Else statement to push an error if the conditional is not met.
            } else {
                errors.push("Invalid Email!");
            };

    } else {
        errors.push("Please enter your email!");
    };



    // +---------+    
    // | MESSAGE | 
    // +---------+
    // Check if message is not empty.
    if (msg.value) {
        data.message = msg.value
    } else {
        errors.push("Please enter your message!")
    };

    // +-----------------+
    // | FEEDBACK/ERRORS |
    // +-----------------+
    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.

    if (errors.length === 0) {
        console.log(data);
    } else {
        console.log(errors);
    };

// Close your function here
};

// Register your form to "click" event.
btn.addEventListener("click", formValidation)

