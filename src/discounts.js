const MEMBER_DISCOUNT = 0.1;
const DOUBLE_SET_DISCOUNT = 0.05;

const DOUBLE_DISCOUNT_ITEMS = ["ORANGE", "PINK", "GREEN"];

function calculateDoubleSetDiscount(items, menu) {
  let discount = 0;

  for (const item of DOUBLE_DISCOUNT_ITEMS) {
    const qty = items[item] || 0;
    if (qty >= 2) {
      discount += qty * menu[item].price * DOUBLE_SET_DISCOUNT;
    }
  }

  return discount;
}

function calculateMemberDiscount(amount, isMember) {
  return isMember ? amount * MEMBER_DISCOUNT : 0;
}

module.exports = {
  calculateDoubleSetDiscount,
  calculateMemberDiscount
};
