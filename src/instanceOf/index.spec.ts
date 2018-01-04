interface basicInterface {
	n: number
}

class Basic implements basicInterface {
	n = 1
	constructor() {
	}
}

const testPlainObject1 = {
	n: 2
}

const testPlainObject2 = new Basic()

console.log( {
	instanceOf1: testPlainObject1 instanceof Basic,
	instanceOf2: testPlainObject2 instanceof Basic,
} )


describe("InstanceOf: ", function() {
	it("instanceOf1", function() {
		expect(
			testPlainObject1 instanceof Basic
		).toBe( false );
	});
	it("instanceOf2", function() {
		expect(
			testPlainObject2 instanceof Basic
		).toBe( true );
	});
});
