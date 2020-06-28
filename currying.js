// function discount(price, discount) {
//     return price * discount
// }

// curried to this:
function discount(discount) {
    return (price) => {
        return price * discount;
    }
}

const discount_10 = discount(0.1);
const discount_20 = discount(0.2);

// discount_10
// is now:
// (price) => {
//     return price * discount;
// }

console.log(discount_10(1200))
console.log(discount_20(1200))