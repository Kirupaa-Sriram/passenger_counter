const incButton = document.getElementById("increment-btn")
const count = document.getElementById("count-el")
const saveBtn = document.getElementById("save-btn")
const saveEl = document.getElementById("save-el")


let counter = 0;

incButton.addEventListener("click",increment);
function increment(){
  counter +=1;
  count.innerText = counter;
}


saveBtn.addEventListener("click",save);
function save(){
  let countStr = " "+ counter +" - ";
  saveEl.innerText += countStr;
  count.innerText = 0;
  counter = 0;
}

