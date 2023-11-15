describe("Ex-SumArray", () => {
  it("should exist a variable named sumArray", () => {
    //Arrange
    //Act
    //Assert
    expect(sumArray).not.toBe(undefined);
  });
  it("sumArray should be a function", () => {
    expect(typeof sumArray).toEqual("function");
  });
  it("sumArray should return 0 if it is null ", () => {
    expect(sumArray(null)).toEqual(0);
  });

  it("sumArray should return 0 if it is undefined", () => {
    expect(sumArray(undefined)).toEqual(0);
  });
  it("sumArray should return 0 if it is an empty array", () => {
    expect(sumArray([])).toEqual(0);
  });
  it("sumArray should return 0 if it is an array with one number", () => {
    expect(sumArray([3])).toEqual(0);
  });
  it("sumArray should return 0 for an array with two numbers", () => {
    expect(sumArray([3, 5])).toEqual(0);
  });
  it("sumArray should return 16 for an input [ 6, 2, 1, 8, 10 ]", () => {
    expect(sumArray([6, 2, 1, 8, 10])).toEqual(16);
  });
  //TODO: check this one
  it("sumArray should return 17 for an input [ 0, 1, 6, 10, 10 ]", () => {
    expect(sumArray([0, 1, 6, 10, 10])).toEqual(17);
  });
  it("sumArray should return -28 for an input [ -6, -20, -1, -10, -12 ]", () => {
    expect(sumArray([-6, -20, -1, -10, -12])).toEqual(-28);
  });
  it("sumArray should return 3 for an input [ -6, 20, -1, 10, -12 ]", () => {
    expect(sumArray([-6, 20, -1, 10, -12])).toEqual(3);
  });
});
