// initialize count
let count = 0;
// select value and buttons
const value = document.getElementById("value");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

increase.addEventListener("click", function () {
    count++;
    value.textContent = count;
    if (count > 0) {
        value.style.color = "green";
    }
});

reset.addEventListener("click", function () {
    count = 0;
    value.textContent = count;
    if (count === 0) {
        value.style.color = "black";
    }
});

decrease.addEventListener("click", function () {
    count--;
    value.textContent = count;
    if (count < 0) {
        value.style.color = "red";
    }
});
