let curr = false;

function switchMode()
{
    let state = document.body;
    let btn = document.querySelector("#circle");
    state.classList.toggle("darkMode");
    btn.style.backgroundColor("#FF8080");
}