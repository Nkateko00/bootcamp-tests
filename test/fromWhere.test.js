describe("fromWhere",function(){
 it("return registration number CA for Cape Town",function(){
    var capeT = "CA";
    assert.equal("Cape Town",fromWhere(capeT));
});
it("return registration number CY for Bellviille",function(){
    var bellV = "CY";
    assert.equal("Bellville",fromWhere(bellV));
});
it("return registration number CJ for Paarl",function(){
    var paarl = "CJ";
    assert.equal("Paarl",fromWhere(paarl));
});
it("return registration number GP for Gauteng",function(){
    var someWh = "GP";
    assert.equal("Some other place!",fromWhere(someWh));

});
});