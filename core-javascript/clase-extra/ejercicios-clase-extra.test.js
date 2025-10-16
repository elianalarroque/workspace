let romanModule = require("./ejercicios-clase-extra.js")

test("lets check input error", () => {
    expect(() => new romanModule.RomanNumberTransformer(1001)).toThrow(RangeError);
    expect(() => new romanModule.RomanNumberTransformer(1001)).toThrow("The input number can not be larger than 1000")

    expect(() => new romanModule.RomanNumberTransformer("MI")).toThrow(RangeError);
    expect(() => new romanModule.RomanNumberTransformer("MI")).toThrow("The input number can not be larger than 1000")
})

test("check integer number to roman", () => {
    expect(new romanModule.RomanNumberTransformer(1).naturalToRoman()).toBe("I");
    expect(new romanModule.RomanNumberTransformer(3).naturalToRoman()).toBe("III");
    expect(new romanModule.RomanNumberTransformer(4).naturalToRoman()).toBe("IV");
    expect(new romanModule.RomanNumberTransformer(5).naturalToRoman()).toBe("V");
    expect(new romanModule.RomanNumberTransformer(9).naturalToRoman()).toBe("IX");
    expect(new romanModule.RomanNumberTransformer(10).naturalToRoman()).toBe("X");
})