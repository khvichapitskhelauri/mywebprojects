let a = document.getElementById("Newst");
let b = document.getElementById("Popular");
let c = document.getElementById("Active");
let n = document.getElementById("team-btn");

function Newst() {
    n.style.left = "35%";
    a.style.display = "flex";
    c.style.display = "none";
    b.style.display = "none";
}

function Popular() {
    n.style.left = "70%";
    b.style.display = "flex";
    a.style.display = "none";
    c.style.display = "none";
}

function Active() {
    n.style.left = "0px";
    c.style.display = "flex";
    a.style.display = "none";
    b.style.display = "none";
}