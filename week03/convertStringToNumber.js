function convertStringToNumber(string, x) {
	if(arguments.length < 2) {
		x = 10;
	}

	let symbol = string.startsWith('-') ? -1 : 1;
	let chars = symbol === -1 ? string.split('').splice(1) : string.split('');
	let number = 0;
	let i = 0;
	const zeroCodePoint = '0'.codePointAt(0);


	if([ '0b', '0o', '0x' ].includes(string.slice(0, 2))) {
		return convertRadixToNumber(string.slice(2), string.slice(0, 2));
	}

	while(i < chars.length && chars[i] !== '.') {
		number = number * x;
		number += chars[i].codePointAt(0) - zeroCodePoint;
		i++;
	}

	if(chars[i] === '.') {
		i++;
	}

	let fraction = 1;
	while(i < chars.length) {
		fraction = fraction / x;
		number += (chars[i].codePointAt(0) - zeroCodePoint) * fraction;
		i++;
	}

	return symbol * number; 
}

function convertRadixToNumber(string, radix) {
	const baseRadix = {
		'0b': 2,
		'0o': 8,
		'0x': 16
	}[radix];
	const chars = string.split('').reverse();
	const zeroCodePoint = '0'.codePointAt(0);
	let number = 0;

	for (let index = 0; index < chars.length; index++) {
		let char = chars[index];
		number += (char.codePointAt(0) - zeroCodePoint) * baseRadix ** index;
	}

	return number;
}

module.exports = convertStringToNumber;