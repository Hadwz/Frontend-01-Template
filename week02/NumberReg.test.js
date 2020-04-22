const NumberReg = require('./NumberReg');

test('正确的整数应该返回true', () => {
	expect(NumberReg(0)).toEqual(true);
	expect(NumberReg(117)).toEqual(true);
	expect(NumberReg(-345)).toEqual(true);
	expect(NumberReg(0x1123)).toEqual(true);
	expect(NumberReg(0x00111)).toEqual(true);
	expect(NumberReg(-0xF1A7)).toEqual(true);
});

test('正确的浮点应该返回true', () => {
	expect(NumberReg(3.14)).toEqual(true);
	expect(NumberReg(-.2345789)).toEqual(true);
	expect(NumberReg(-3.12e+12)).toEqual(true);
	expect(NumberReg(.1e-23)).toEqual(true);
});

test('不是Number字面量应该返回false', () => {
	expect(NumberReg('adsadsasd')).toEqual(false);
	expect(NumberReg('12asd213')).toEqual(false);
	expect(NumberReg('+12ec213')).toEqual(false);
	expect(NumberReg('-123123adsads123123')).toEqual(false);
	expect(NumberReg(null)).toEqual(false);
	expect(NumberReg(undefined)).toEqual(false);
});