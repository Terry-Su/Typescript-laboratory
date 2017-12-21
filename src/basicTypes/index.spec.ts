// ****** Number ******
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744

// ****** Boolean ******
let isDone: boolean = true

// ****** String ******
let color: string = 'blue'

// ****** Array ******
let list: number[] = [ 1, 2, 3 ]

// ****** Enum ******
enum Color1 { Red, Green, Blue }
let c1: Color1 = Color1.Red
enum Color2 { Red = 'red', Green='green', Blue='blue' }
let c2: Color2 = Color2.Green
enum Color3 { Red, Green, Blue }
let c3: string = Color3[3]

// ****** Tuple ******
let x1: [ string, number ] = [ 'hello', 10 ]
let x2: [ string, number, boolean ] = [ 'hello', 10, true ]



describe("Enum", function() {
	it("", function() {
		// expect().toBe();
	});
});
