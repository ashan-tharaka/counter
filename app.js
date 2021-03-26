const res = document.getElementById("res");
const dec = document.getElementById("dec");
const inc = document.getElementById("inc");
const dis = document.getElementById("display");

res.addEventListener("click", reset);
dec.addEventListener("click", decrease);
inc.addEventListener("click", increase);



function reset() {
    dis.innerHTML = "0";
    dis.style.color = "teal";
}

function decrease() {
    var count = Number(dis.innerHTML);
    count++;
    dis.innerHTML = count;
    if (Number(dis.innerHTML) > 0) {
        dis.style.color = "blue";
    } else if (Number(dis.innerHTML) == 0) {
        dis.style.color = "teal";
    }
}

function increase() {
    var count = Number(dis.innerHTML);
    count--;
    dis.innerHTML = count;
    if (Number(dis.innerHTML) < 0) {
        dis.style.color = "red";
    } else if (Number(dis.innerHTML) == 0) {
        dis.style.color = "teal";
    }
}