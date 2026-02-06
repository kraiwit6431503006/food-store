const MENU = require("./menu");
const {
  calculateDoubleSetDiscount,
  calculateMemberDiscount
} = require("./discounts");

/**
 * @param {Object} items
 * @param {boolean} isMember
 * @returns {number}
 */
function calculateTotalPrice(items, isMember = false) {
  let subtotal = 0;

  for (const [key, qty] of Object.entries(items)) {
    if (!MENU[key]) {
      throw new Error(`Invalid menu item: ${key}`);
    }
    subtotal += MENU[key].price * qty;
  }

  const doubleSetDiscount = calculateDoubleSetDiscount(items, MENU);
  const memberDiscount = calculateMemberDiscount(
    subtotal - doubleSetDiscount,
    isMember
  );

  return subtotal - doubleSetDiscount - memberDiscount;
}

module.exports = calculateTotalPrice;
