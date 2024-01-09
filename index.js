// counter program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const label1 = document.getElementById("label1");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    label1.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    label1.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    label1.textContent = count;
}