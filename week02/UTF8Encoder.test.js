const UTF8Encoder = require('./UTF8Encoder');

test('winter is coming 应返回正确的编码字符', () => {
	expect(UTF8Encoder('winter is comming')).toEqual("\\0x77\\0x69\\0x6e\\0x74\\0x65\\0x72\\0x20\\0x69\\0x73\\0x20\\0x63\\0x6f\\0x6d\\0x6d\\0x69\\0x6e\\0x67");
});
