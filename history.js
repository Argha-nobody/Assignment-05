

const cards = document.getElementById("history-redirect");

cards.addEventListener("click" , function() {

   console.log("History Button Clicked");

   const cards1 = document.getElementById("parent-card");

   document.getElementById("history-section").classList.remove("hidden");
   cards1.classList.add("hidden");
   document.getElementById("parent-card1").classList.add("hidden");


})

const cards1 = document.getElementById("go-back");

cards1.addEventListener("click" , function() {

   document.getElementById("parent-card").classList.remove("hidden");
   document.getElementById("parent-card1").classList.remove("hidden");

   document.getElementById("history-section").classList.add("hidden");


})


