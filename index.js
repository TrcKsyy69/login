const users = [
    { name: 'Marco', pass: '123'},
    { name: 'Quirijn', pass: '456'},
    { name: 'X', pass: 'xxx'},
]

const foo = { name: 'Element', type: 'password', name: 'pass', id: 'ww', value: '123'}

const formulier = document.getElementById('form');

const validate = (e) => {
    e.preventDefault();
    const username = document.querySelector('input[name="user"]').value
    const password = document.querySelector('input[name="pass"]').value

    const user = users.find(findUser2(username))
    console.log("🚀 ~ file: index.js ~ line 17 ~ validate ~ user", user)

    if (user === undefined) {
        document.querySelector(".error").classList.add("show")

    } else if (!validatePassword(user, password)) {
        document.querySelector(".passwordError").classList.add("show")

    } else {
        // Do some CSS transitions on .box element
    }
}

const true$ = !false === true
const false$ = !true === false

const validatePassword = (user, pass) => {
    // Check if passwords match --> true | false
    return
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

