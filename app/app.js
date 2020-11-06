function main(){
let togglecont = document.getElementById('themeswitch');
let toggle = document.getElementById("togglebtn");
let body = document.querySelector("body")

togglecont.addEventListener("click", function(){
    body.classList.toggle("dark");
})
}
window.addEventListener("load", main);