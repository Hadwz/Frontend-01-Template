const convertStringToNumber = require('./convertStringToNumber');
const convertNumberToString = require('./convertNumberToString');

test('字符转换数字应该正确', () => {
	expect(convertStringToNumber('0')).toEqual(0);
	expect(convertStringToNumber('10086')).toEqual(10086);
	expect(convertStringToNumber('10.0123')).toEqual(10.0123);
	expect(convertStringToNumber('117')).toEqual(117);
	expect(convertStringToNumber('-345')).toEqual(-345);
	expect(convertStringToNumber('-6')).toEqual(-6);
	expect(convertStringToNumber('0b10')).toEqual(Number('0b10'));
	expect(convertStringToNumber('0o11')).toEqual(Number('0o11'));
	expect(convertStringToNumber('0x1123')).toEqual(Number('0x1123'));
});

test('数字转换为字符串应该正确', () => {
	expect(convertNumberToString(0)).toEqual('0');
	expect(convertNumberToString(10086)).toEqual('10086');
	expect(convertNumberToString(10.0123)).toEqual('10.0123');
	expect(convertNumberToString(10.3333)).toEqual('10.3333');
});
