/*

There are currently no tests in this directory.
This project uses the Mocha framework for unit testing.
Travis CI runs all of the tests in the /tests directory when building.

*/

var assert = require('assert');
var chai = require('chai');
var myCode = require('./index.js');

describe('Input validation tests', function() {
    // describe('UserID input validation tests', function() {
    //   it('UserID test - testing a random 16 character ID', function() {
    //     assert.equal(trued, myCode.userIdRegExValid("abcdef1111111111"));
    //   });
    //   it('UserID test - testing a random 10 character ID', function() {
    //     assert.equal(false, myCode.userIdRegExValid("abcd234517"));
    //   });
    //   //test fails---------? Fix Regex
    //   it('UserID test - testing a random 17 character ID', function() {
    //     assert.equal(false, myCode.userIdRegExValid("abcdef1111111111746"));
    //   });

    //   it('UserID test - testing a random 16 character ID outside the domain of a-f', function() {
    //     assert.equal(false, myCode.userIdRegExValid("hijklm1234567891"));
    //   });

    //   it('UserID test - testing a random ID outside the domain of digits and numbers', function() {
    //     assert.equal(false, myCode.userIdRegExValid("//][``]"));
    //   });
    // });




    describe("assertions", {
    'testingEventThing': function() {
        eventValidation({"queryStringParameters": {"latitude": 50.857185,"longitude": 0.141022,"distance": 2000}}, this.expect([true, 50.857185, 0.141022, 2000]));
    }
    });


    describe('LongLatRegexFunction - check regex is correct', function() {
      it('LongLatRegExFunction test - check positive value', function() {
        assert.equal(true, myCode.longLatReg(50.0));
      });

      it('LongLatRegExFunction test - check negative value', function() {
        assert.equal(true, myCode.longLatReg(-200.983));
      });

      it('LongLatRegExFunction test - 0 is a valid input', function() {
        assert.equal(true, myCode.longLatReg(0));
      });

      it('LongLatRegExFunction test - test for strings', function() {
        assert.equal(false, myCode.longLatReg("hello world"));
      });
    });

    describe('Validate latitude conforms to normal convention', function() {
      it('Latitude value is within range test - check boundary case (positive)', function() {
        assert.equal(true, myCode.checkLatRange(90.000000));
      });

      it('Latitude value is within range test - check boundary case (negative)', function() {
        assert.equal(true, myCode.checkLatRange(-90.000000));
      });

      it('Latitude value is within range test - check boundary case (zero)', function() {
        assert.equal(true, myCode.checkLatRange(0));
      });

      it('Latitude value is within range test - check normal case', function() {
        assert.equal(true, myCode.checkLatRange(14.647352));
      });

      it('Latitude value is within range test - check for string input', function() {
        assert.equal(true, myCode.checkLatRange("9.754"));
      });

      it('Latitude value is NOT within range test - check for out of bounds case', function() {
        assert.equal(false, myCode.checkLatRange(207.81));
      });
    });

    describe('Validate longitude conforms to normal convention', function(){
      it('Longitude value is within range test - check boundary case (positive)', function() {
        assert.equal(true, myCode.checkLongRange(180.000000));
      });

      it('Longitude value is within range test - check boundary case (negative)', function() {
        assert.equal(true, myCode.checkLongRange(-180.000000));
      });

      it('Longitude value is within range test - check boundary case (zero)', function() {
        assert.equal(true, myCode.checkLongRange(0));
      });

      it('Longitude value is within range test - check normal case', function() {
        assert.equal(true, myCode.checkLongRange(-87.647352));
      });

      it('Longitude value is within range test - check for string input', function() {
        assert.equal(true, myCode.checkLongRange("91.075"));
      });

      it('Longitude value is NOT within range test - check for out of bounds case', function() {
        assert.equal(false, myCode.checkLatRange(-196.856));
      });
    });


});
