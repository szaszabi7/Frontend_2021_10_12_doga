document.addEventListener("DOMContentLoaded", init)

function init() {
    document.getElementById('hozzaad').addEventListener("click", general)
    
}

function general() {

    let adat = document.getElementById('todo').value;
    if (adat == "") {
        alert("Nem lehet üres");
        return;
    } else {
        let li = document.createElement("li");
        var text = document.createTextNode(adat);
        let label = document.createElement("label");
        label.appendChild(text);

        let input = document.createElement("input");
        input.type = "checkbox";
        input.className = "checBoxCheck";

        let close = document.createElement("button");
        var x = document.createTextNode("x");
        close.className = "closeButton";

        close.appendChild(x);
        input.addEventListener("click", done);
        close.addEventListener("click", asd);
        
        li.appendChild(input);
        li.appendChild(label);
        li.appendChild(close);

        document.getElementById('lista').appendChild(li);
        document.getElementById('todo').value = "";
    }
}

function done(e) {
    let sor = e.target.parentNode;
    let szoveg = sor.getElementsByTagName("label")[0];
    szoveg.classList.toggle("checked");
}

function asd(e) {
    e.target.parentNode.remove();
}