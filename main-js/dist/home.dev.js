"use strict";

var dropbtn = document.querySelector(".nav-bar .dropbtn");
var dropcont = document.querySelector(".dropdown .dropcont");

dropbtn.onclick = function () {
  this.nextElementSibling.classList.toggle("show");
};

console.log(dropbtn);
console.log(dropcont);