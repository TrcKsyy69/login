var users = [
    { name: 'Marco', pass: '123'},
    { name: 'Quirijn', pass: '456'},
    { name: 'X', pass: 'xxx'},
]

const formulier = document.getElementById('form');

const validate = (e) => {
    e.preventDefault();
    const username = document.querySelector('input[name="user"]').value
    const password = document.querySelector('input[name="pass"]').value

    const user = users.find(findUser2(username))
    const renderClassError = renderError('.error')

    if (username === null) {
        renderClassError("Username cannot be empty.")
    } else if(password === null) {
        renderClassError("Password cannot be empty.")
     } else if (user === undefined) {
        renderClassError("User does not exist.")
    } else if (!validatePassword(user, password)) {
        renderClassError("Username cannot be empty.")
    } else {
        document.querySelector(".passwordCorrect").classList.add("show")
        // Do some CSS transitions on .box element
    }
}

const renderError = (className) => (message) => {
    document.querySelector(className).innerHTML = message
    document.querySelector(className).classList.add("show")
}

const true$ = !false === true
const false$ = !true === false

const validatePassword = (user, givenPassword) => {
    // user --> { name: 'Marco', pass: '123'}
    // pass --> "Whatever"
    // Check if passwords match --> true | false
    return user.pass === givenPassword
}

const validateName = (user, givenName) => {
    return user.name === givenName
}

// findUser1('mijnUserName', {name:'henk', pass: 'wachtwoord'})
// const findUser1 (username, user) => {
//     ...
// }

// findUser2('mijnUserName')({name:'henk', pass: 'wachtwoord'})
const findUser2 = (username) => (user) => {
    return user.name === username
}



// function validate () {}

formulier.addEventListener('submit', validate);

