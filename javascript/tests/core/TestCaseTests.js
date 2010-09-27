(function(){

    var Assert          = YUITest.Assert;
    
    //-------------------------------------------------------------------------
    // Base Test Suite
    //-------------------------------------------------------------------------
    
    var suite = new YUITest.TestSuite("TestCase Tests");
    
    //-------------------------------------------------------------------------
    // Test Case for contains()
    //-------------------------------------------------------------------------
    
    suite.add(new YUITest.TestCase({
    
        name: "wait()/resume() Tests",
        
        _should: {
            fail: {
                "wait() without resume() should fail": true
            }
        },        
        
        "wait() with a function to execute should work": function(){
            this.wait(function(){
                Assert.isTrue(true);  //FIXME
            }, 500);
        },
        
        "wait() without a function to execute followed by resume() should work": function(){
            var that = this;
            setTimeout(function(){
                that.resume(function(){
                    Assert.isTrue(true);  //FIXME
                });
            });
            
            this.wait(500);
        },
        
        "wait() without resume() should fail": function () {
            this.wait(500);
        },
        
        "resume() without wait() should throw an error": function () {
            var that = this;
            Assert.shouldError("resume() called without wait().", function(){
                that.resume(function(){});
            });
        }
    }));        
    

    //add it to be run
    YUITest.TestRunner.add(suite);

})();