document.addEventListener("DOMContentLoaded", init)

function init() {
    document.getElementById('hozzaad').addEventListener("click", general)
    
}

function general() {

    let adat = document.getElementById('todo').value;
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    let label = document.createElement("label");
    var text = document.createTextNode(adat);
    label.appendChild(text);

    let close = document.createElement("button");
    var x = document.createTextNode("x");

    close.appendChild(x);
    input.addEventListener("click", done);
    close.addEventListener("click", asd);
    
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(close);

    document.getElementById('lista').appendChild(li);
}

function done(e) {
    let sor = e.target.parentNode;
    let szoveg = sor.getElementsByTagName("label")[0];
    szoveg.classList.toggle("checked");
}

function asd(e) {
    e.target.parentNode.remove();
}