const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you-container");
const submitBtn = document.getElementById("sumbit");
const rateAgainBtn = document.getElementById("rate-again");
const ratingDisplay = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", ()=>{
    thanksContainer.classList.remove("hidden");
    mainContainer.classList.add("hidden");
});
rateAgainBtn.addEventListener("click", ()=>{
    mainContainer.classList.remove("hidden");
    thanksContainer.classList.add("hidden");
});

rates.forEach((rate) =>{
    rate.addEventListener("click", ()=>{
        ratingDisplay.innerHTML = rate.innerHTML;
    });
});



