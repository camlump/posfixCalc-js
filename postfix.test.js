const postfix = require('./postfix');
const { checkOperator } = require('./postfix');

test('Check for size of the returned array', () => {
    let str = '5 + 5';

    let myArray = postfix.checkOperator(str);


    expect(myArray).toContain('+')
})

 