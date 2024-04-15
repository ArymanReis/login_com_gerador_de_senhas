const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

const openCloseGeneratoButton = document.querySelector("#open-generate-password");
const generatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");

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

const generatePassword = (
    getLetterLowerCase,
    getLetterUpperCase,
    getNunber,
    getSymbol) => {

    let password = ""

    // Segunda versão
const passwordLength = +lengthInput.value;

    const generators = [];

    if (lettersInput.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase);
    }
    
    if (numbersInput.checked) {
        generators.push(getNunber);
    }
    
    if (symbolsInput.checked) {
        generators.push(getSymbol);
    }

    console.log(generators.length);

    if (generators.length === 0) {
        return;
    }

    for(i = 0; i < passwordLength; i = i + generators.length) {

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

openCloseGeneratoButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide");
});

copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault();

    const password = generatedPasswordElement.querySelector("h4").innerText;

    navigator.clipboard.writeText(password).then(() => {
        copyPasswordButton.innerText = "Senha copiada com sucesso";

        setTimeout(() => {
            copyPasswordButton.innerText = "Copiar";
        }, 1000);
    });
});
