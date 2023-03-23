//fica verificando se o usuário está logado
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = "../../../index.html";
    }
})

//fica ouvindo o input de email para aparecer mensagem de erro ou não
function onChangeEmail() {
    const email = form.email().value
    form.emailRequiredError().style.display = email ? "none" : "block"

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block"
    toggleRegisterButtonDisable()
}

//fica ouvindo o input de senha para aparecer mensagem de erro ou não
function onChangePassword() {
    const password = form.password().value
    form.passwordRequiredError().style.display = password ? "none" : "block"

    form.passwordMinLengthRequiredError().style.display = password.length >= 6 ? "none" : "block"
    validatePasswordsMatch()
    toggleRegisterButtonDisable()
}

//fica ouvindo o input de validar senha para aparecer mensagem de erro ou não
function onChangeConfirmPassword() {
    validatePasswordsMatch()
    toggleRegisterButtonDisable()
}

//valida se o "repetir senha" confere com a senha digitada
function validatePasswordsMatch() {
    const password = form.password().value
    const confirmPassword = form.confirmPassword().value

    form.confirmPassworDoesntMatchError().style.display = password != confirmPassword ? "block" : "none"
    toggleRegisterButtonDisable()
}

//verifica se tudo está preenchido para ativar o botão registrar
function toggleRegisterButtonDisable() {
    form.registerButton().disabled = !isFormValid()
}

//verifica se os inputs estão dentro dos padroes exigidos
function isFormValid() {
    const email = form.email().value
    if (!email || !validateEmail(email)) {
        return false
    }
    const password = form.password().value
    if (!password || password < 6) {
        return false
    }
    const confirmPassword = form.confirmPassword().value
    if (confirmPassword != password) {
        return false
    }

    return true
}

//faz o registro do usuário
function register() {
    showLoading()

    const email = form.email().value
    const password = form.password().value

    firebase.auth().createUserWithEmailAndPassword(
        email, password
    ).then(() => {
        hideLoading()
        window.location.href = "../../../index.html"
    }).catch(error => {
        hideLoading()
        alert(getErrorMessage(error))
    })
}

//se o usuário já existir exibe essa mensagem
function getErrorMessage(error) {
    if (error.code == "auth/email-already-in-use") {
        return "Email já está em uso"
    }
    return error.message
}


//Manipulando DOM
const form = {
    confirmPassword: () => document.getElementById("confirmPassword"),
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    passwordMinLengthRequiredError: () => document.getElementById("password-min-length-error"),
    confirmPassworDoesntMatchError: () => document.getElementById("password-doesnt-match-error"),
    registerButton: () => document.getElementById("register-button")
}