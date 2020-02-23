const generator = require('./../../src/Services/generator');
test("Should Generate Correct params for SPs.", () => {
    expect(generator.generateStringParams(["Pronoy",1])).toBe("('Pronoy',1)");
});
test("Should generate blank parameters",()=>{
    expect(generator.generateStringParams([])).toBe("()");
});