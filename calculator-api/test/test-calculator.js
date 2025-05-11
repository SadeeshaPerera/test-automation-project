import { expect } from "chai";
import calculator from "../util.js";

describe("Calculator Add Tests", () => {
    it("Is 5 + 2 = 7", (done) => {
        expect(calculator.add(5, 2)).to.equal(7);
        done();
    });

    it("Is undefined + undefined = 0", (done) => {
        expect(calculator.add(undefined, undefined)).to.equal(0);
        done();
    });

    it("Is -5 + 2 = -3", (done) => {
        expect(calculator.add(-5, 2)).to.equal(-3);
        done();
    });
});

describe("Calculator Subtract Tests", () => {
    it("Is 5 - 2 = 3", (done) => {
        expect(calculator.subtract(5, 2)).to.equal(3);
        done();
    });

    it("Is undefined - undefined = 0", (done) => {
        expect(calculator.subtract(undefined, undefined)).to.equal(0);
        done();
    });

    it("Is -5 - 2 = -7", (done) => {
        expect(calculator.subtract(-5, 2)).to.equal(-7);
        done();
    });
});

describe("Calculator Multiply Tests", () => {
    it("Is 5 * 2 = 10", (done) => {
        expect(calculator.multiply(5, 2)).to.equal(10);
        done();
    });

    it("Is undefined * undefined = 0", (done) => {
        expect(calculator.multiply(undefined, undefined)).to.equal(0);
        done();
    });

    it("Is -5 * 2 = -10", (done) => {
        expect(calculator.multiply(-5, 2)).to.equal(-10);
        done();
    });
});