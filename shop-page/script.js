let a = document.getElementById("red");
let b = document.getElementById("blue");
let c = document.getElementById("black");

function red() {
    a.style.display = "flex";
    c.style.display = "none";
    b.style.display = "none";
}

function blue() {
    a.style.display = "none";
    c.style.display = "none";
    b.style.display = "flex";
    b.getElementsByTagName("span")[0].innerText = " $200";
}

function black() {
    a.style.display = "none";
    c.style.display = "flex";
    b.style.display = "none";
    c.getElementsByTagName("span")[0].innerText = "$500";
}

