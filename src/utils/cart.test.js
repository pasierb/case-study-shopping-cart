import { itemValue } from './cart';

describe('#itemValue', () => {
  describe('total', () => {
    it('should apply promotion', () => {
      expect(itemValue({
        quantity: 5,
        price: 0.3,
        freeAmountThreshold: 3,
        freeAmountValue: 1
      }).total).toEqual(1.2);
    });

    it('should return correct decimal value', () => {
      expect(itemValue({
        quantity: 3,
        price: 0.3
      }).total).toEqual(0.9);
    });
  });

  describe('base', () => {
    it('should return correct decimal value', () => {
      expect(itemValue({
        quantity: 3,
        price: 0.3
      }).base).toEqual(0.9);
    });
  });

  describe('discount', () => {
    it('should apply promotion for minimum threshold matched', () => {
      expect(itemValue({
        quantity: 3,
        price: 0.3,
        freeAmountThreshold: 3,
        freeAmountValue: 1
      }).discount).toEqual(-0.3);
    });

    it('should apply promotion for each threshold multiplication', () => {
      expect(itemValue({
        quantity: 7,
        price: 0.3,
        freeAmountThreshold: 3,
        freeAmountValue: 1
      }).discount).toEqual(-0.6);
    });

    it('should return correct decimal value', () => {
      expect(itemValue({
        quantity: 10,
        price: 0.3,
        freeAmountThreshold: 3,
        freeAmountValue: 1
      }).discount).toEqual(-0.9);
    });
  });
});
