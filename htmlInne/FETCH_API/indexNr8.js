document.addEventListener("DOMContentLoaded", function () {
    var but1 = document.getElementById("b1");
    but1.addEventListener('click', function () {
      fetch("http://localhost/fetch/dane/rolex.txt").then(response => {
        return response.text();
      }).then(dane => {document.getElementById("info").innerHTML = dane;})
    }, false);
    var but2 = document.getElementById("b2");
    but2.addEventListener('click', function () {
      fetch("http://localhost/fetch/dane/patek_philippe.txt")
      .then(response => {return response.text();})
      .then(dane => {document.getElementById("info").innerHTML = dane;})
    }, false);
    var but3 = document.getElementById("b3");
    but3.addEventListener('click', function () {
      fetch("http://localhost/fetch/dane/harry_winston.txt")
      .then(response => {return response.text();})
      .then(dane => {document.getElementById("info").innerHTML = dane;})
    }, false);
    var but4 = document.getElementById("b4");
    but4.addEventListener('click', function () {
      fetch("http://localhost/fetch/dane/richard_mille.txt")
      .then(response => {return response.text();})
      .then(dane => {document.getElementById("info").innerHTML = dane;})
    }, false);
  });