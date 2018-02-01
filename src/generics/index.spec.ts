import log from "../util/log"

describe( "Generics", () => {
	function identity<T>( arg: T ): T {
		return arg
	}
	function identityFn<T>( arg: T ): T {
		return arg
	}

	it( `Basic usage`, () => {
		const number = identity( 1 )
		const string = identity( "Hello" )

		expect( number ).toBe( 1 )
		expect( string ).toBe( "Hello" )
	} )

	it( `Array`, () => {
		function logLength<T>( arg: Array<T> ): Array<T> {
			log( `The length of [${ arg }]  is ${ arg.length }.`, 'Log correctly!' )
			return arg
		}

		logLength<number>( [ 1, 2, 3 ] )
	} )


	it( `Function`, () => {
		const myIdentityFn1: <T>( arg: T ) => T = identityFn
		const myIdentityFn2: <U>( arg: U ) => U = identityFn
		const myIdentityFn3: { <T>( arg: T ): T } = identityFn
	} )

	it( `Interface`, () => {
		interface GenericIdentityFn {
			<T>( arg: T ): T
		}

		const myIdentityFn: GenericIdentityFn = identityFn
	} )

	it( `Interface - Type variable`, () => {
		interface GenericIdentityFn<T> {
			<T>( arg: T ): T
		}
		const myNumberIdentityFn: GenericIdentityFn<number> = identityFn
	} )

	it( `Class`, () => {
		class GenericNumber<T> {
			max: T
			add: ( x: T, y: T ) => T
		}

		const myGenericNumber = new GenericNumber<number>()
		myGenericNumber.max = 100
		myGenericNumber.add = function ( x, y ) {
			return x + y
		}
	} )

	it( `Constraint`, () => {
		const value: Constraint = { length: 10 }

		interface Constraint {
			length: number
		}

		function logLength<T extends Constraint>( arg: T ): T {
			log( `The length of ${ JSON.stringify( value ) } is ${ arg.length }.`, 'Log correctly!' )
			return arg
		}

		logLength( value )
	} )


} )
