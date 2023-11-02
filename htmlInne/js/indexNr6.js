class User {
    constructor(nazwa = "nazwa", email = "xxx", miasto = "miasto") {
        this.nazwa = nazwa;
        this.email = email;
        this.miasto = miasto;
    }
    pokaz() {
        return "Nazwa: " + this.nazwa + " E-mail: " + this.email + " Miasto: " + this.miasto;
    }
    formularzRejestracji() {
        var formularz = "";
        formularz +=
            '<div id="error">' +
            '<label for="nazwa">Nazwa:</label>' +
            '<input type="text" id="nazwa" placeholder="np. Eryk">' +
            '<div>';
        formularz +=
            '<div>' +
            '<label for="email">Email: </label>' +
            '<input type = "email" name = "email" id = "email" placeholder="np. d@gmail.com">' +
            '</div>';
        formularz +=
            '<div>' +
            '<label for="miasto">Miasto:</label>' +
            '<input type="text" id="miasto" placeholder="np. Lublin">' +
            '<div>';
        formularz +=
            '<div>' +
            '<button type="submit"  id="rejestruj">Zarejestruj</button>' +
            '</div>';
        return formularz;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    var user = new User();
    console.log(user.pokaz());
    document.querySelector("#formularz").innerHTML = user.formularzRejestracji();
    rejestruj.addEventListener("click", () => {

        user.nazwa = document.querySelector('#nazwa').value;
        user.email = document.querySelector('#email').value;
        user.miasto = document.querySelector('#miasto').value;

        const storagedUsers = localStorage.getItem("users");
        let users = [];
        if (storagedUsers) {
            users = JSON.parse(storagedUsers);
        }
        const userName= user.nazwa;
        const userEmail = user.email;
        const duplicateLog = users.find(u => u.nazwa === userName);
        const duplicateEmail = users.find(u => u.email === userEmail);
        if (duplicateLog) {
            document.querySelector('#info').innerHTML = "Istnieje już użytkownik o podanej nazwie";
        } else if (duplicateEmail) {
            document.querySelector('#info').innerHTML = "Istnieje już użytkownik o podanym email";
        } else {
            localStorage.setItem("users", JSON.stringify([user, ...users]));
            document.querySelector('#info').innerHTML = "";
        }
    });
});




//skrypt główny –instrukcje są wykonywane dopiero po załadowaniuDOM: