var login_page = document.getElementById("sec-1");
var game_page = document.getElementById("sec-2");
var game_page_display = "none";

var error_message = document.getElementById("login-error");

console.log(login_page + " " + game_page);

function login(){
    var password = document.getElementsByClassName('login-pass-input')[0].value;
    console.log(md5(password));

    if (md5(password) == '6d6f50ad0fc79ab6be2d3b4acc78a216'){
        login_page.style.display = "none";
        game_page.style.display = "block";
        console.log(game_page.style.display);
        document.title = "SofaKing";
    }
    else
        error_message.style.display = "block";
        error_message.innerText = "ERROR: Wrong password";
}