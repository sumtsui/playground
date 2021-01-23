/** A class definition with a generic parameter */
var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.data = [];
        this.push = function (item) { return _this.data.push(item); };
        this.pop = function () { return _this.data.shift(); };
    }
    return Queue;
}());
var queue = new Queue();
queue.push(0);
queue.push(1);
// queue.push("1"); // ERROR : cannot push a string. Only numbers allowed
console.log('queue pop', queue.pop());
function identity(arg) {
    return arg;
}
// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length); // Property 'length' does not exist on type 'T'.
//   return arg;
// }
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
