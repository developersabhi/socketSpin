const spinService = require('./spinService');

function spinWheel() {
  const result = spinService.getRandomCoupon();
  return result;
}

module.exports = { spinWheel };
