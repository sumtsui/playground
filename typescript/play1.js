var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function printPerson(person) {
    console.log(person.name);
}
var John = { name: 'John', age: 30 };
// 鸭子类型，只要它像鸭子一样会叫，那它就一定是只鸭子
var Mary = { name: 'Mary', age: 25, phoneNumber: '13344400999' };
printPerson(John);
printPerson(Mary);
function makeCar(car) {
    var fallback = {
        maker: 'BMW',
        year: '2010'
    };
    return __assign(__assign({}, fallback), car);
}
// makeCar({ maker: 'Honda', year: '2013', accelarate: () => null });
