// stringToBinary: convert string to binary
export const stringToBinary = (str) => {
    try {
        return str.split('').map((char) => {
            return char.charCodeAt(0).toString(2);
        });
    } catch (error) {
        return {error: 'Error converting binary'}
    }

}

// binaryToString: convert binary to string
export const binaryToString = (binary) => {
    try {
        const str = binary.map((char) => {
            return String.fromCharCode(parseInt(char, 2));
        });
        return str.join('');
    } catch (error) {
        return {error: 'Error converting binary'}
    }

}

// urlEncodeToString: convert url encoded string to string
export const urlEncodeToString = (str) => {
    try {
        return decodeURIComponent(str);
    } catch (error) {
        return {error: 'Error converting url encoded string'}
    }
}

// stringToUrlEncode: convert string to url encoded string
export const stringToUrlEncode = (str) => {

    try {
        return encodeURIComponent(str);
    } catch (error) {
        return {error: 'Error converting url encoded string'}
    }
}

// stringToBase64: convert string to base64
export const stringToBase64 = (str) => {
    try {
        return btoa(str);
    } catch (error) {
        return {error: 'Error converting base64'}
    }
}

// base64ToString: convert base64 to string
export const base64ToString = (base64) => {
    try {
        return atob(base64);
    } catch (error) {
        return {error: 'Error converting base64'}
    }
}


// stringToHexadecimal: convert string to hexadecimal
export const stringToHexadecimal = (str) => {
    try {
        return str.split('').map((char) => {
            return char.charCodeAt(0).toString(16);
        });
    } catch (error) {
        return {error: 'Error converting hexadecimal'}
    }
}

// hexadecimalToString: convert hexadecimal to string
export const hexadecimalToString = (hex) => {
    try {
        const str = hex.map((char) => {
            return String.fromCharCode(parseInt(char, 16));
        });
        return str.join('');
    } catch (error) {
        return {error: 'Error converting hexadecimal'}
    }
}

// stringToDecimal: convert string to decimal
export const stringToDecimal = (str) => {
    try {
        return str.split('').map((char) => {
            return char.charCodeAt(0);
        });
    } catch (error) {
        return {error: 'Error converting decimal'}
    }
}

// decimalToString: convert decimal to string
export const decimalToString = (decimal) => {
    try {
        const str = decimal.map((char) => {
            return String.fromCharCode(char);
        });
        return str.join('');
    } catch (error) {
        return {error: 'Error converting decimal'}
    }
}
