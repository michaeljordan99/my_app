
/* Array Test */
var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

/* get_user tests */
var get_user = require('../routes/middleware/get_user');
describe('get_user', function(){
	it('by id 1 should return Michael Jordan', function(){
		var user = get_user.getById(1);
		assert.equal(user.id, 1);
		assert.equal(user.firstName, "Michael");
		assert.equal(user.lastName, "Jordan");
	})
})

describe('get_user', function(){
	it('get_last should return Joe Smith', function(){
		var user = get_user.getLast();
		assert.equal(user.id, 2);
		assert.equal(user.firstName, "Joe");
		assert.equal(user.lastName, "Smith");
	})
})