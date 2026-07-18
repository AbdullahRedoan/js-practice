let cart = 4100;
let isMember = false;

if(cart > 1000 && isMember){
    let memberDiscountAmount = cart*20 / 100
    cart = cart-memberDiscountAmount;
}else if(!isMember){
    let discountAmount = cart*10 / 100
    cart=cart-discountAmount;
}
console.log(cart);