const generatePassword = (characterString, length) => {
    let password = ''
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * characterString.length)
        password += characterString.charAt(random)
    }
    return password;
};

const generate = () => {
    let length = parseInt(inputLength.value);

    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '.?,;-_¡!¿*%&$/()[]{}|@><'
    const characterString = letters + numbers + symbols
   
    generatedPassword.innerText = generatePassword(characterString, length)
}

window.addEventListener('DOMContentLoaded', () => {
    btnGenerate.addEventListener('click', () => {
        generate();
    })
})
window.addEventListener('DOMContentLoaded', () => {
    btnGenerate.addEventListener('click', () => {
        generate();
    })
})
