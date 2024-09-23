document.addEventListener("DOMContentLoaded", function() {
    const balnElement = document.getElementById("main-balance"); 
    let nowbl = parseFloat(balnElement.textContent); 

    const inputt = document.getElementById("in"); 
    const btn = document.getElementById("out"); 
    const upp = document.getElementById("update1-balance");

    btn.addEventListener("click", function() {

        const value = parseFloat(inputt.value); 

        if ( !isNaN(value) && value > 0 ) {
            nowbl -= value; 
            balnElement.textContent = nowbl + " BDT"; 
            inputt.value = '';
            upp.textContent = value;

        } else {
            alert("Please enter a valid donation amount."); 
        }





    });
});

document.addEventListener("DOMContentLoaded", function() {
    const balnElement = document.getElementById("main-balance"); 
    let nowbl = parseFloat(balnElement.textContent); 

    const inputt = document.getElementById("inp-feni"); 
    const btn = document.getElementById("btn-feni");
    const upp = document.getElementById("update2-balance");

    btn.addEventListener("click", function() {

        const value = parseFloat(inputt.value); 

        if ( !isNaN(value) && value > 0 ) {
            nowbl -= value; 
            balnElement.textContent = nowbl + " BDT"; 
            inputt.value = '';
            upp.textContent = value;
        } else {
            alert("Please enter a valid donation amount."); 
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const balnElement = document.getElementById("main-balance"); 
    let nowbl = parseFloat(balnElement.textContent); 

    const inputt = document.getElementById("inp-quota"); 
    const btn = document.getElementById("btn-quota");
    const upp = document.getElementById("update3-balance"); 

    btn.addEventListener("click", function() {

        const value = parseFloat(inputt.value); 

        if ( !isNaN(value) && value > 0 ) {
            nowbl -= value; 
            balnElement.textContent = nowbl + " BDT"; 
            inputt.value = '';
            upp.textContent = value;
        } else {
            alert("Please enter a valid donation amount."); 
        }
    });
});


