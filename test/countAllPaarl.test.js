describe("countAllPaarl",function(){
    it("countAllPaarl should count all registration Numbers from Paarl",function(){
        var fromPaarl = countAllPaarl('CJ 123,CA 345 123,CA 2345','CJ');

        //fromStellies should contains
        assert.deepEqual(fromPaarl, 1)
      
    }); 
    it("countAllPaarl should count all registration Numbers from Cape Town",function(){
        var fromTown = countAllPaarl('CJ 123,CA 345 123,CAA 2345','CA');

        //fromStellies should contains
        assert.deepEqual(fromTown, 1)
});
});