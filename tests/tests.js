
const {setTestState} = require("./state");

module.exports = (fixture,  callback = () => {}) => {
    const fixtures = require(fixture);

    fixtures.map(item => {

        beforeEach(() => {
            const pattern =  item.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`.*${pattern}$`);
            if(regex.test(expect.getState().currentTestName))  {
                setTestState({ config: item.config, expected: item.expected });
            }
        })

        it(item.name, callback);

        afterAll(() => {
            setTestState({});
        })
    });
}