describe("greet",function(){
it("should say Hello to Lindani",function(){
  assert.equal("Hello, Lindani",greet("Lindani"));
});
it("should greet with 'Hello,Zola'",function(){
    assert.equal("Hello, Zola",greet("Zola"));
});
});
