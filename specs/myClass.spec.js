var MyClass = require("../src/myClass.js")
var myObj = new MyClass();
var chai = require("chai");
var sinon = require("sinon");
var expect = chai.expect;
const chaiaspromise = require("chai-as-promised");
chai.use(chaiaspromise);

describe("Test suit", function(){
    it("Test the add method", function(){
        expect(myObj.add(1,2)).to.be.equal(3);
    });

    it("spy the add method",function(){
        var spy = sinon.spy(myObj,"add");
        var arg1 = 10,
        arg2 = 20;        
        myObj.callAnotherFn(arg1,arg2);
        // sinon.assert.calledOnce(spy);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(10,20)).to.be.true;
    });

    it("spy the add method",function(){
        var callback = sinon.spy();
        myObj.calltheCallback(callback);
        expect(callback.calledOnce).to.be.true;
    });

    it("Mock the sayHello method",function(){
        var mock = sinon.mock(myObj);
        var expectation = mock.expects("sayHello");
        expectation.exactly(1);
        expectation.withArgs("Hello world");
        // myObj.callAnotherFn(10,20)
        myObj.callAnotherFn();
        mock.verify();
    })
});

describe("Test suit for stub", function() {
    it("Stub the add method", function() {
      var stub = sinon.stub(myObj, "add");
      stub
        .withArgs(10, 20)
        .onFirstCall()
        .returns(100)
        .onSecondCall()
        .returns(200);
      expect(myObj.callAnotherFn(10, 20)).to.be.equal(100);
      expect(myObj.callAnotherFn(10, 20)).to.be.equal(200);
    });
  });

  describe("Test the promise", function() {
    it("Promise test case with chai-as-promised", function() {
      this.timeout(0);
      return expect(myObj.testPromise()).to.eventually.equal(6);
    });
  });