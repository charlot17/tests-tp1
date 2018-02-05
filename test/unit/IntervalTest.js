describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

    ].forEach(function (interval) {
        it("should overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeFalsy();
        });
    });
});

describe("Interval - includes", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(10, 18),
        new Interval(10, 14),
        new Interval(11, 16),
        new Interval(10, 13),
        new Interval(20, 20)

    ].forEach(function (interval) {
        it("should include " + interval.toString() + " in " + testedInterval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeTruthy();
        });
    });

    [
        new Interval(9, 21),
        new Interval(9, 11),
        new Interval(10,21),

    ].forEach(function (interval) {
        it("should not include " + interval.toString() + " in " + testedInterval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeFalsy();
        });
    });
});
