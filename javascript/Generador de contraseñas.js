document.addEventListener('DOMContentLoaded', () => {
    const outputElement = document.getElementById('passwordOutput');
    const generateButton = document.getElementById('generateButton');
    const lengthInput = document.getElementById('longitud');
    const lengthValueSpan = document.getElementById('long-val'); // Elemento para mostrar la longitud

    lengthInput.addEventListener('input', () => {
        lengthValueSpan.textContent = lengthInput.value;
        generatePassword();
    });

    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=ñÑ';

    generateButton.addEventListener('click', generatePassword);
    function generatePassword() {
        const length = parseInt(lengthInput.value, 10);

        let availableChars = '';
        const includeUpper = document.getElementById('mayusculas').checked;
        const includeLower = document.getElementById('minusculas').checked;
        const includeNumbers = document.getElementById('numeros').checked;
        const includeSymbols = document.getElementById('simbolos').checked;

        if (includeUpper) availableChars += upperCase;
        if (includeLower) availableChars += lowerCase;
        if (includeNumbers) availableChars += numbers;
        if (includeSymbols) availableChars += symbols;

        if (availableChars.length === 0) {
            outputElement.textContent = 'Selecciona al menos un tipo de carácter para generar la contraseña.';
            return;
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * availableChars.length);
            password += availableChars[randomIndex];
        }

        outputElement.textContent = password;
    }

    lengthValueSpan.textContent = lengthInput.value;

    generatePassword();
});