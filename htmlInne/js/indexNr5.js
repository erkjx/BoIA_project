function sprawdzPole(pole_id, obiektRegex) {
    var obiektPole = document.getElementById(pole_id);
    if (!obiektRegex.test(obiektPole.value)) return (false);
    else return (true);
}

function zapis() {
    var user = {};
    user.imie = document.getElementById('imie').value;

    obiektEmail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    if (sprawdzPole("email", obiektEmail)) {
        user.email = document.getElementById('email').value;
    }

    user.miasto = document.getElementById('miasto').value;
    var lista = JSON.parse(sessionStorage.getItem('lista'));
    if (lista === null) {
        lista = [];
    }

    if (user.imie == "" || user.email == undefined || user.miasto == "") {
        alert("Wszystkie pola muszą być uzupełnione prawidłowo!!");
    } else {
        lista.push(user);
        sessionStorage.setItem('lista', JSON.stringify(lista));
    }
}

function pokaz() {
    var content = '',
        startTab = "<table>",
        startCol = "<tr>",
        startRow = "<td>",
        endRow = "</td>",
        endCol = "</tr>",
        endTab = "</table> <br>";

    var lista = JSON.parse(sessionStorage.getItem('lista'));
    if (lista === null) {
        alert("Brak użytkowników zapisanych do newslettera");
    } else {
        document.getElementById('dane').style.visibility = "visible";
        for (var i = 0; i < lista.length; i++) {
            content += startTab + startCol + startRow + "Imię użytkownika: " + endRow + startRow + lista[i].imie + endRow + endCol;
            content += startCol + startRow + "Email: " + endRow + startRow + lista[i].email + endRow + endCol;
            content += startCol + startRow + "Miasto: " + endRow + startRow + lista[i].miasto + endRow + endCol;


        }
        document.getElementById("dane").innerHTML = content;
    }
}

function usun() {
    sessionStorage.clear();
}
