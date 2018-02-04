describe("Factorial", function(){
    var testCases = [
        {
            n : 0,
            factorial : 1
        },
        {
            n : 1,
            factorial : 1
        },
        {
            n : 2,
            factorial : 2
        },
        {
            n : 3,
            factorial : 6
        },
        {
            n : 4,
            factorial : 24
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.factorial + " when n = " + testCase.n, function(){
            var res = Util.factorial(testCase.n);
            expect(res).toEqual(testCase.factorial);
        })
    });


    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.factorial(-1);
        }
        expect(f).toThrow('Unable to compute factorial for n < 0');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.factorial('test');
        }
        expect(f).toThrow('Unable to compute factorial of non integer values');
    })

    it("should raise an exception for n > 100", function(){
        var f = function(){
            Util.factorial(101);
        }
        expect(f).toThrow('Unable to compute factorial for n > 100');
    })
});

describe('Arrangement' , function(){

    var testCases = [
    {
        n: 0,
        r: 0,
        value: 1
    },
    {
        n: 2,
        r: 2,
        value: 2
    },
    {
        n: 3,
        r: 1,
        value: 3
    },
    {
        n: 4,
        r: 4,
        value: 24
    }];

    testCases.forEach(function(testCase){
        it("should return " + testCase.value + " when n = " + testCase.n + " and r = " + testCase.r, function(){
            var res = Util.arrangement(testCase.n, testCase.r);
            expect(res).toEqual(testCase.value);
        })
    });

    it("should raise an exception when r > n", function(){
        var f = function(){
            Util.arrangement(1,2);
        }
        expect(f).toThrow('Unable to compute arrangement for r > n');
    });

   
});


describe('Combination' , function(){

    var testCases = [
    {
        n: 0,
        r: 0,
        value: 1
    },
    {
        n: 2,
        r: 2,
        value: 1
    },
    {
        n: 4,
        r: 2,
        value: 6
    }];

    testCases.forEach(function(testCase){
        it("should return " + testCase.value + " when n = " + testCase.n + " and r = " + testCase.r, function(){
            var res = Util.combination(testCase.n, testCase.r);
            expect(res).toEqual(testCase.value);
        })
    });

});

describe('isPrime' , function(){
  var testCases = [
    {
        n: 1,
        value: false
    },
    {
        n: 2,
        value: true
    },
    {
        n: 3,
        value: true
    },
    {
        n: 4,
        value: false
    },
    {
        n: 5,
        value: true
    },
    {
        n: 6,
        value: false
    }];

    testCases.forEach(function(testCase){
        it("should return " + testCase.value + " when n = " + testCase.n, function(){
            var res = Util.isPrime(testCase.n);
            expect(res).toEqual(testCase.value);
        })
    });

    it("should raise an exception when n <= 0", function(){
        var f = function(){
            Util.isPrime(0);
        }
        expect(f).toThrow('Unable to compute isPrime for n <= 0');
    })
});

describe('sumPrime' , function(){
  var testCases = [
    {
        n: 2,
        value: 2
    },
    {
        n: 6,
        value: 10
    },
    {
        n: 8,
        value: 17
    }];

    testCases.forEach(function(testCase){
        it("should return " + testCase.value + " when n = " + testCase.n, function(){
            var result = Util.sumPrime(testCase.n);
            expect(result).toEqual(testCase.value);
        })
    });


    it("should raise an exception when n < 2", function(){
        var f = function(){
            Util.sumPrime(1);
        }
        expect(f).toThrow('Unable to compute sumPrime for n < 2');
    })
});