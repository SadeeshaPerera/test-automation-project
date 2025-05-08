import { expect } from "chai";
import calculator from "../util.js";

describe("Calculator Tests", () => {
  // ADDITION
  it("Is 5 + 2 = 7", (done) => {
    expect(calculator.add(5, 2)).to.equal(7);
    done();
  });

  it("Is undefined + undefined = NaN", (done) => {
    expect(calculator.add(undefined, undefined)).to.be.NaN;
    done();
  });

  // SUBTRACTION
  it("Is 10 - 3 = 7", (done) => {
    expect(calculator.subtract(10, 3)).to.equal(7);
    done();
  });

  // MULTIPLICATION
  it("Is 4 * 3 = 12", (done) => {
    expect(calculator.multiply(4, 3)).to.equal(12);
    done();
  });

  // DIVISION
  it("Is 9 / 3 = 3", (done) => {
    expect(calculator.divide(9, 3)).to.equal(3);
    done();
  });

  it("Is 5 / 0 = 'Cannot divide by zero'", (done) => {
    expect(calculator.divide(5, 0)).to.equal("Cannot divide by zero");
    done();
  });
});
