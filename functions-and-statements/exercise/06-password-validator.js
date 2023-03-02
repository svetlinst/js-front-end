function solve(pass) {
    function isDigit(character) {
        if (character.length === 1) {
            const code = character.codePointAt(0);
            return 47 < code && code < 58;
        }
        return false;
    }

    function isDigitOrLetter(ch) {
        if ((ch.toUpperCase() !== ch.toLowerCase()) || isDigit(ch)) {
            return true;
        }
        return false;
    }

    function hasOnlyDigitsAndLetters (text) {
        const arr = Array.from(text);
        let result  = true;
        arr.forEach(x => {
            if (!isDigitOrLetter(x)) {
                result =  false;
            }
        })
        return result;
    }

    function hasTwoDigits(text) {
        let letters = 0;
        text.forEach(x => {
            if (isDigit(x)) {
                letters += 1;
            }
        })

        if (letters >= 2) {
            return true;
        }
        return false;
    }

    let passValid = true;

    if (pass.length < 6 || pass.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        passValid = false;
    }

    if (!hasOnlyDigitsAndLetters(pass)) {
        console.log('Password must consist only of letters and digits');
        passValid = false;
    }

    if (!hasTwoDigits(Array.from(pass))) {
        console.log('Password must have at least 2 digits');
        passValid = false;
    }

    if (passValid) {
        console.log('Password is valid')
    }
}

solve('MyPass123');
