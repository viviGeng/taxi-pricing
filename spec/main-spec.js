var _ =require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var main = require("../main/main.js");

describe("taxi pricing",function(){
    it("returns 6 given 1 mile and 0 waiting minute",function(){
        var result=main(1,0);
        expect(result).to.equal(6);
    });
    it("returns 6 given 2 miles and 0 waiting minute",function(){
        var result=main(2,0);
        expect(result).to.equal(6);
    });
    it("returns 8 given 5 miles and 0 waiting minute",function(){
        var result=main(5,0);
        expect(result).to.equal(8);
    });
    it("returns 13 given 10 miles and 0 waiting minute",function(){
        var result=main(10,0);
        expect(result).to.equal(13);
    });
    it("returns 14 given 10 miles and 5 waiting minute",function(){
        var result=main(10,5);
        expect(result).to.equal(14);
    });

});