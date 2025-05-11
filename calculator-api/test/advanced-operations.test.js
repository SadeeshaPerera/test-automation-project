import { expect } from "chai";
import calculator from "../util.js";

describe("Calculator Power Tests", () => {
    it("Is 2 ^ 3 = 8", (done) => {
        expect(calculator.power(2, 3)).to.equal(8);
        done();
    });

    it("Is any number ^ 0 = 1", (done) => {
        expect(calculator.power(5, 0)).to.equal(1);
        done();
    });

    it("Is 2 ^ -2 = 0.25", (done) => {
        expect(calculator.power(2, -2)).to.equal(0.25);
        done();
    });

    it("Is undefined ^ undefined = 0", (done) => {
        expect(calculator.power(undefined, undefined)).to.equal(0);
        done();
    });

    it("Is 0 ^ 5 = 0", (done) => {
        expect(calculator.power(0, 5)).to.equal(0);
        done();
    });
});

describe("Calculator Modulo Tests", () => {
    it("Is 10 % 3 = 1", (done) => {
        expect(calculator.modulo(10, 3)).to.equal(1);
        done();
    });

    it("Is modulo by zero = 0", (done) => {
        expect(calculator.modulo(10, 0)).to.equal(0);
        done();
    });

    it("Is -10 % 3 = -1", (done) => {
        expect(calculator.modulo(-10, 3)).to.equal(-1);
        done();
    });

    it("Is undefined % undefined = 0", (done) => {
        expect(calculator.modulo(undefined, undefined)).to.equal(0);
        done();
    });

    it("Is 0 % 5 = 0", (done) => {
        expect(calculator.modulo(0, 5)).to.equal(0);
        done();
    });
});
