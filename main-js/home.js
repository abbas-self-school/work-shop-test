let dropbtn = document.querySelector(".nav-bar .dropbtn");
let dropcont = document.querySelector(".dropdown .dropcont");

dropbtn.onclick = function () {
    this.nextElementSibling.classList.toggle("show");
};

console.log(dropbtn);
console.log(dropcont);
