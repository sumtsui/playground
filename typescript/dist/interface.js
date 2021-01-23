var car = {
    honk: function () {
        console.log('tuut tuut');
    },
    brand: 'Ford',
    year: '1998',
    type: 'Sedan'
};
car.honk();
function createSquare(config) {
    return {
        color: config.color || 'red',
        area: config.width ? config.width * config.width : 20
    };
}
var mySquare = createSquare({ colour: 'red', width: 100 });
/**
 * One final way to get around these checks, which might be a bit surprising, is to assign the object to another variable: Since squareOptions won’t undergo excess property checks, the compiler won’t give you an error.
 *
 * so strange
 */
var squareOptions = { colour: 'red', width: 100 };
var mySquare2 = createSquare(squareOptions);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    Clock.prototype.setYou = function () {
        return {};
    };
    return Clock;
}());
