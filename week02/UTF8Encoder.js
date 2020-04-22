function UTF8Encoder(string) {
	const code = encodeURIComponent(string);
	let hexString = '';
	
	for (let index = 0; index < code.length; index++) {
		const c = code.charAt(index);
	
		if (c === '%') { //当c不是ascii码范围的会以%XX%XX的形式编码
			const hex = code.charAt(index + 1) + code.charAt(index + 2);
			hexString += `\\0x${hex}`;
			index += 2;
		} else {
			hexString += `\\0x${c.charCodeAt(c[0]).toString(16)}`;
		}
	}

	return hexString;
}

module.exports = UTF8Encoder;