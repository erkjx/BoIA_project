const xhr = new XMLHttpRequest();
function pobierzDane(nazwaPliku) {
    if (xhr) {
        var url = "http://localhost/xhr/dane/" + nazwaPliku + ".txt";
        xhr.open("GET", url);
        xhr.addEventListener("readystatechange", function () {
            document.getElementById("info").innerHTML = xhr.responseText;
        });
        xhr.send(null);
    }
}