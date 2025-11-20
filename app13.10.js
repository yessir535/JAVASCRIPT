
function pobierzLiczby() {
    var a = parseFloat(document.getElementById("liczba1").value);
    var b = parseFloat(document.getElementById("liczba2").value);
    if (isNaN(a) || isNaN(b)) {
        document.querySelector("h1").textContent = "Podaj dwie liczby";
        return null;
    }
    return { a: a, b: b };
}

function dodaj() {
    var n = pobierzLiczby();
    if (!n) return;
    document.querySelector("h1").textContent = n.a + n.b;
}

function odejmij() {
    var n = pobierzLiczby();
    if (!n) return;
    document.querySelector("h1").textContent = n.a - n.b;
}

function mnoz() {
    var n = pobierzLiczby();
    if (!n) return;
    document.querySelector("h1").textContent = n.a * n.b;
}

function dziel() {
    var n = pobierzLiczby();
    if (!n) return;
    if (n.b === 0) {
        document.querySelector("h1").textContent = "Błąd: dzielenie przez 0";
        return;
    }
    document.querySelector("h1").textContent = n.a / n.b;
}
