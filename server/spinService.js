const coupons = [
    { id: 1, discount: '10%', code: 'COUPON10' },
    { id: 2, discount: '20%', code: 'COUPON20' },
    { id: 3, discount: '30%', code: 'COUPON30' },
    { id: 4, discount: '40%', code: 'COUPON40' },
    { id: 5, discount: '50%', code: 'COUPON50' }
  ];
  
  function getRandomCoupon() {
    const randomIndex = Math.floor(Math.random() * coupons.length);
    return coupons[randomIndex];
  }
  
  module.exports = { getRandomCoupon };
  