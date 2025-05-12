function register(ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const userName = sectionElement.children.userName.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation) {
        alert("Usuário " + userName + " registrado!")
    } else {
        alert("Senhas incorretas!")
    }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeListener() {
    button.removeEventListener('click', register)
    alert("Evento removido")
}

button.addEventListener('mouseover', function (ev) {
    console.log(ev.currentTarget)
})