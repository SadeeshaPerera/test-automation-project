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

    it("Is 0 + 0 = 0", (done) => {
        expect(calculator.add(0, 0)).to.equal(0);
        done();
    });

    it("Is large numbers 999999 + 1 = 1000000", (done) => {
        expect(calculator.add(999999, 1)).to.equal(1000000);
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

    it("Is 0 - 5 = -5", (done) => {
        expect(calculator.subtract(0, 5)).to.equal(-5);
        done();
    });

    it("Is 10 - 10 = 0", (done) => {
        expect(calculator.subtract(10, 10)).to.equal(0);
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

    it("Is 0 * 5 = 0", (done) => {
        expect(calculator.multiply(0, 5)).to.equal(0);
        done();
    });

    it("Is 0.5 * 2 = 1", (done) => {
        expect(calculator.multiply(0.5, 2)).to.equal(1);
        done();
    });
});

describe("Calculator Divide Tests", () => {
    it("Is 10 / 2 = 5", (done) => {
        expect(calculator.divide(10, 2)).to.equal(5);
        done();
    });

    it("Is division by zero = 0", (done) => {
        expect(calculator.divide(10, 0)).to.equal(0);
        done();
    });

    it("Is 0 / 5 = 0", (done) => {
        expect(calculator.divide(0, 5)).to.equal(0);
        done();
    });

    it("Is undefined / undefined = 0", (done) => {
        expect(calculator.divide(undefined, undefined)).to.equal(0);
        done();
    });
});