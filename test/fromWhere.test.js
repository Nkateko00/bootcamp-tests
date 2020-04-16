describe("fromWhere",function(){
 it("fromWhere  CA from Cape Town",function(){
    var capeT = "CA";
    assert.equal("Cape Town",fromWhere(capeT));
});
it("fromWhere CY from Bellviille",function(){
    var bellV = "CY";
    assert.equal("Bellville",fromWhere(bellV));
});
it("fromWhere CJ from Paarl",function(){
    var paarl = "CJ";
    assert.equal("Paarl",fromWhere(paarl));
});
it("fromWhere CJ from Paarl",function(){
    var someWh = "GP";
    assert.equal("Some other place!",fromWhere(someWh));

});
});