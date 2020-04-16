describe("Return True for Weekday", function () {
    it("should return true for Monday", function () {
        var weekDay = "Monday";
        assert.equal(true,isWeekday(weekDay));

    });
    it("should return false for Saturday",function () {
        assert.equal(false, isWeekday("Saturday"));
    });
    it("should return false for Sunday", function () {
        assert.equal(false, isWeekday("Sunday"));
    });
});