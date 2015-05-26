describe('triangleTracker', function() {
  it("is not a triangle", function(){
    expect(triangleTracker(2,9,6)).to.equal("not a triangle");
  });

  it("is equilateral", function(){
    expect(triangleTracker(5,5,5)).to.equal("equilateral");
  });

  it("is an isoceles", function(){
    expect(triangleTracker(2,3,3)).to.equal("isoceles");
  });

  it("is scalene", function(){
    expect(triangleTracker(3,4,5)).to.equal("scalene");
  });

});
