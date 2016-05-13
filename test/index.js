var assert     = require('assert')
var equal      = require('assert-dir-equal')
var Metalsmith = require('metalsmith')
var log        = require('..')

describe.skip('metalsmith-file-data-logger', function(){
  it('should match all files and output all data', function(done){
    var logger = function(value) {
 
    }

    var obj = {}
    Metalsmith('test/fixture')
      .use(log())
      .build(function(err){
        if (err) {
          return done(err)
        }
        equal('test/fixtures/basic/expected', 'test/fixtures/basic/build')
        done()
      })
  })
})
