"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var timesTwo_1 = require("./timesTwo");
console.log(timesTwo_1.useful.timesTwo(9));
function hello(string) {
    console.log('test', string);
    console.log('test', string);
}
hello('1');
var s = 'g';
var b = false;
function printName(stark) {
    console.log(stark.name);
}
printName({ name: 'fred' });
printName({ label: 'test' });
var Superhero = (function () {
    function Superhero() {
        this.saying = 'my cave';
        this.y = Superhero.x;
    }
    Superhero.prototype.sayHello = function (x) {
        console.log(x, ['base']);
    };
    Superhero.x = 'xxxxxxxxx';
    return Superhero;
}());
var b1 = new Superhero();
b1.saying = 'sasasas';
b1.sayHello('fred');
b1.sayHello('fred');
var Heman = (function (_super) {
    __extends(Heman, _super);
    function Heman() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Heman.prototype.sayHello = function (x) {
        console.log(x + " heman says hi");
        _super.prototype.sayHello.call(this, x);
    };
    return Heman;
}(Superhero));
var h1 = new Heman();
h1.sayHello('ddddd');
//# sourceMappingURL=hello.js.map