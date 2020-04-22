/**
 * 匹配数字是否为数字字面量
 * @param {number} number 
 */
function NumberReg(number) {
	var reg = /^((-?\d+)(\.\d+)?|-?\d+|-?0b(0-1)+|-?0o(0-7)+|[-+]?\d*\.?\d+([eE][-+]?\d+))$/;
	return reg.test(number);
}

module.exports = NumberReg;