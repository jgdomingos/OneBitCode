function register(element) {
    const userName = element.children.userName.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if(password ===passwordConfirmation) {
        alert("Usuário " + userName + " registrado!")
    } else {
        alert("As senhas estão diferentes")
    }
}