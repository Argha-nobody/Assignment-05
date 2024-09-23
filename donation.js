document.addEventListener("DOMContentLoaded", function() {
    const balnElement = document.getElementById("main-balance"); // Get the balance element
    let nowbl = parseFloat(balnElement.textContent); // Parse the current balance as a number

    const inputt = document.getElementById("in"); // Get the input field
    const btn = document.getElementById("out"); // Get the donate button

    btn.addEventListener("click", function() { // Add click event listener to the button
        const value = parseFloat(inputt.value); // Get the donation amount

        // Check if the value is a valid number and greater than 0
        if (!isNaN(value) && value > 0) {
            nowbl -= value; // Subtract donation from the balance
            balnElement.textContent = nowbl.toFixed(2); // Update the balance in the element
            inputt.value = ''; // Clear the input field
        } else {
            alert("Please enter a valid donation amount."); // Alert if the input is invalid
        }
    });
});
