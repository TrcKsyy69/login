var users = [
    { name: 'Marco', pass: '123'},
    { name: 'Quirijn', pass: '456'}
]

const formulier = document.getElementById('form');
const signupForm = document.getElementById('formSignUp');

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
    }
}

const renderError = (className) => (message) => {
    document.querySelector(className).innerHTML = message
    document.querySelector(className).classList.add("show")
}

const true$ = !false === true
const false$ = !true === false

const validatePassword = (user, givenPassword) => {
    return user.pass === givenPassword
}

const validateName = (user, givenName) => {
    return user.name === givenName
}

const findUser2 = (username) => (user) => {
    return user.name === username
}

formulier.addEventListener('submit', validate);
signupForm.addEventListener('submit', validate);

const validateSignup = () => {
    e.preventDefault();
    const username = document.querySelector('input[name="userSignup"]').value
    const password = document.querySelector('input[name="userPassword"]').value

    console.log(validatePassword(password));
}

function validatePassword (password) {
    return  password.length >= 8 &&
            password.match(/^[A-Za-z]+$/) &&
            password.match(/^[0-9]+$/)
}

// Kloppen AL deze stellingen? --> neen
5 > 1 &&    // true
10 > 8 &&   // true
3 > 6 &&    // neen
69 > 42     // true

10 < 14 &&  // true
5 < 1 &&    // neen
3 < 190     // true

1 === 1 &&      // true
10 === 10 &&    // true
5 === 5         // true

1 !== 1 &&      // true
10 !== 10 &&    // true
5 !== 5         // true

5 > 1 &&
10 < 11 &&
69 === 69