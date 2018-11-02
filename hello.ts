import { useful } from './timesTwo';

console.log (useful.timesTwo(9));

function hello(string : String) {
    console.log('test', string);
    console.log('test', string);
}

// hello('test');
hello('1');

let s : String = 'g'

let b : Boolean = false

// s = 1;

interface stark {
    name?: string,
    label?: string
}

function printName(stark: stark) {
    console.log(stark.name);
}

printName({name:'fred'})
printName({label: 'test'})





class Superhero {
    name: string;
    saying: string;
    y: string;
    static x: string = 'xxxxxxxxx';

    constructor() {
        this.saying = 'my cave'
        this.y = Superhero.x;
    }

    sayHello(x: string) {
        console.log(x, ['base'])
    }
}

let b1 = new Superhero();
b1.saying = 'sasasas';
b1.sayHello('fred');
b1.sayHello('fred');



class Heman extends Superhero {
    sayHello(x: string) {
        console.log(`${x} heman says hi`);
        super.sayHello(x)
    }
}

// 
let h1 = new Heman()
h1.sayHello('ddddd')
