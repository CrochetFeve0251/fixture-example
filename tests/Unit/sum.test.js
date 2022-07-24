const tests = require('../tests');
const {getTestState} = require("../state");

tests('../../Fixtures/sum', () => {
    const { configs, expected } = getTestState();
    expect(sum(configs.value1, configs.value2)).toBe(expected);
});