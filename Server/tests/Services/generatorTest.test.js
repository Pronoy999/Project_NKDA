const generator = require('./../../src/Services/generator');
test("Should Generate Correct params for SPs.", () => {
    expect(generator.generateParams(["Pronoy",1])).toBe("('Pronoy','1')");
});
test("Should generate blank parameters",()=>{
    expect(generator.generateParams([])).toBe("()");
});