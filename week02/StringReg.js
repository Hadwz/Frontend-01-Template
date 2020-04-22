function StringReg(string) {
	var reg = /(?:\r\n)|[\s\S]|[^\\\r\n][0-\uFFFF]*?/;

	return reg.test(string);
}

module.exports = StringReg;