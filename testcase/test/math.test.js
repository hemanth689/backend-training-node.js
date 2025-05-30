const { expect } = require('chai');
const { add, divide } = require('../src/math');

describe('Math Functions', () => {
    describe('add()', () => {
        it('should return 5 when 2 and 3 are added', () => {
            expect(add(2, 3)).to.equal(5);
        });
    });

    describe('divide()', () => {
        it('should return 2 when 4 is divided by 2', () => {
            expect(divide(4, 2)).to.equal(2);
        });

        it('should throw error when dividing by zero', () => {
            expect(() => divide(10, 0)).to.throw("Cannot divide by zero");
        });
    });
});
