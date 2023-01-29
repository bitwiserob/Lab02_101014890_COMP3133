var expect = require("chai").expect;
var calc = require("../app/calculator")

describe("Calculator", ()=>{
    it("Should add two numbers",()=>{

        let addCalc = calc.add(1,2);
        expect(addCalc).to.equal(3);
    });
 it("Should fail to add two numbers",()=>{

        let failCalc = calc.add(2,2);
        expect(failCalc).to.equal(5);
    });


it("Should subtract two numbers",()=>{

        let addCalc = calc.sub(1,2);
        expect(addCalc).to.equal(-1);
    });
 it("Should fail to subtract two numbers",()=>{

        let failCalc = calc.sub(2,2);
        expect(failCalc).to.equal(1);
    });

it("Should mul two numbers",()=>{

        let addCalc = calc.mul(1,2);
        expect(addCalc).to.equal(2);
    });
 it("Should fail to mul two numbers",()=>{

        let failCalc = calc.mul(2,2);
        expect(failCalc).to.equal(5);
    });



});
