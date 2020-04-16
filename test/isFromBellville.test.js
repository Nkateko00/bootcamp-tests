describe("return all registration numbers starting with'CY'",function(){
    it("should return true for 'CY-223-34'",function(){
      assert.equal(true,isFromBellville("CY-223-42"));
    });
    it("should return false for 'CJ-233-312'",function(){
      assert.equal(false,isFromBellville("CJ-232-23"));
    });
    });
