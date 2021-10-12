document.addEventListener("DOMContentLoaded", init)

function init() {
    document.getElementById('hozzaad').addEventListener("click", general)
}

function general() {
    let adat = document.getElementById('todo').value;
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    var text = document.createTextNode("\t" + adat);
    let close = document.createElement("button");
    var x = document.createTextNode("x");
    close.className = "delete";

    close.appendChild(x);
    
    li.appendChild(input);
    li.appendChild(text);
    li.appendChild(close);

    document.getElementById('lista').appendChild(li);
}