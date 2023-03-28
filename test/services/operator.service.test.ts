import operatorService from "../../src/services/operator.service";

test("scenarios test", () => {
    expect(operatorService.operator(3,"+",2)).toBe(5);
    expect(operatorService.operator(8,"-",2)).toBe(6);
    expect(operatorService.operator(3,"*",4)).toBe(12);
    expect(operatorService.operator(50,"/",10)).toBe(5);
})
