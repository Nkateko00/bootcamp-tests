describe("transportFee funtion",function(){
    it("should return morining function",function(){
        var time = "morning";
        assert.equal("R20",transportFee(time));
    });
    it("should return afternoon function",function(){
        var time = "afternoon";
        assert.equal("R10",transportFee(time));
    });
    it("should return nightshift function",function(){
        var time = "nightshift";
        assert.equal("free",transportFee(time));
    });
});