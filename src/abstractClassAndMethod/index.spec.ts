abstract class Animal {
	abstract makeSound(): void
	move() {

	}
}


class Dog extends Animal {
	makeSound():void {
		console.log( 'Wang Wang!' )
	}
}


