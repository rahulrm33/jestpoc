class MyClass{
    constructor(){
        console.log("initiate");
    }

    sayHello(){
        console.log("Hello");
    }

    add(arg1,arg2){
        var result;
        result = arg1+arg2;
        return result;
    }

    callAnotherFn(arg1,arg2){
        this.sayHello("Hello world");
        var result = this.add(arg1,arg2);
        return result;
    }

    calltheCallback(callback){
        callback();
    }

    testPromise() {
        return new Promise(function(resolve, reject) {
          setTimeout(() => resolve(3), 3000);
        }).then(function(result) {
          return result * 2;
        });
      }

}

module.exports = MyClass;