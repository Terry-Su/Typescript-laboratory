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


