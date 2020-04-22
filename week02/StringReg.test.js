const StringReg = require('./StringReg');

test('输入字符直接量应该返回正确', () => {
	expect(StringReg('string text')).toEqual(true);
	expect(StringReg("string text")).toEqual(true);
	expect(StringReg("中文/汉语")).toEqual(true);
	expect(StringReg("español")).toEqual(true);
	expect(StringReg("English ")).toEqual(true);
	expect(StringReg("English ")).toEqual(true);
	expect(StringReg("हिन्दी")).toEqual(true);
	expect(StringReg("العربية")).toEqual(true);
	expect(StringReg("português")).toEqual(true);
	expect(StringReg("বাংলা")).toEqual(true);
	expect(StringReg("русский")).toEqual(true);
	expect(StringReg("日本語")).toEqual(true);
	expect(StringReg("ਪੰਜਾਬੀ")).toEqual(true);
	expect(StringReg("한국어")).toEqual(true);
});
