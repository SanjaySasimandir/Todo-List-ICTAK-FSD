function formValidate() {
    username = document.getElementById("username");
    password = document.getElementById("password");
    return usernameCheck(username, password, validLogin, triggerError);
}

function usernameCheck(username, password, validLogin, triggerError) {
    if (username.value == "admin" && password.value == "12345") {
        return validLogin();
    }
    else {
        return triggerError();
    }
}

function validLogin() {
    return true;
}

function triggerError() {
    errorLabel = document.getElementById("errorLabel");
    errorLabel.innerText = "Enter the valid credentials!";
    errorLabel.removeAttribute("hidden", true);
    username.style.border="2px solid #DC3545";
    password.style.border="2px solid #DC3545";
    return false;
}

function whileTyping() {
    errorLabel = document.getElementById("errorLabel");
    errorLabel.setAttribute("hidden", true);
}