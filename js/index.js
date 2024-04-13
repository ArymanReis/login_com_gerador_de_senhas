const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Função
const getLetterLowerCase = () => {

    return (String.fromCharCode(Math.floor(Math.random() * 26 + 97)));
}

const getLetterUpperCase = () => {

    return (String.fromCharCode(Math.floor(Math.random() * 26 + 65)));
}

const getNunber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const Symbols = "#$%&*=_-!?^{}[],;"
    return Symbols[Math.floor(Math.random() * Symbols.length)];
}

console.log(getSymbol());

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNunber, getSymbol) => {

    let password = ""

    const passwordLength = 10

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNunber,
        getSymbol
    ]

    for(i = 0; i < passwordLength; i = i + 4) {

        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue;
        });
    }
    password = password.slice(0,passwordLength);

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
};



generatePasswordButton.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNunber,
        getSymbol
    );
});

