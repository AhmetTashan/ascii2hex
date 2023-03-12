// stringToBinary: convert string to binary
export const stringToBinary = (str) => {
    const binary = str.split('').map((char) => {
        return char.charCodeAt(0).toString(2);
    });
    return binary;
}

// binaryToString: convert binary to string
export const binaryToString = (binary) => {
    const str = binary.map((char) => {
        return String.fromCharCode(parseInt(char, 2));
    });
    return str.join('');
}

// urlEncodeToString: convert url encoded string to string
export const urlEncodeToString = (str) => {
    return decodeURIComponent(str);
}

// stringToUrlEncode: convert string to url encoded string
export const stringToUrlEncode = (str) => {
    return encodeURIComponent(str);
}

// stringToBase64: convert string to base64
export const stringToBase64 = (str) => {
    return btoa(str);
}

// base64ToString: convert base64 to string
export const base64ToString = (base64) => {
    return atob(base64);
}


// stringToHexadecimal: convert string to hexadecimal
export const stringToHexadecimal = (str) => {
    const hex = str.split('').map((char) => {
        return char.charCodeAt(0).toString(16);
    });
    return hex;
}

// hexadecimalToString: convert hexadecimal to string
export const hexadecimalToString = (hex) => {
    const str = hex.map((char) => {
        return String.fromCharCode(parseInt(char, 16));
    });
    return str.join('');
}

// stringToDecimal: convert string to decimal
export const stringToDecimal = (str) => {
    const decimal = str.split('').map((char) => {
        return char.charCodeAt(0);
    });
    return decimal;
}

// decimalToString: convert decimal to string
export const decimalToString = (decimal) => {
    const str = decimal.map((char) => {
        return String.fromCharCode(char);
    });
    return str.join('');
}
