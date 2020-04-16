describe("yearsAgo",function(){
 it("yearsAgo 1977",function(){
     var year = 44;
    assert.equal(year,yearsAgo("1976"));
 });
 it("yearsAgo 2000",function(){
    var year = 20;
   assert.equal(year,yearsAgo("2000"));
});

});