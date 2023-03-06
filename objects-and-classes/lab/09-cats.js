function solve(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (el of arr) {
        [name, age] = el.split(' ');
        let cat = new Cat(name, age);
        cat.meow();
    }
}


solve(['Mellow 2', 'Tom 5'])