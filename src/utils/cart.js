import { Decimal } from 'decimal.js';

export function itemValue({
  price,
  quantity,
  freeAmountThreshold,
  freeAmountValue
}) {
  const base = Decimal.mul(price, quantity).toNumber();
  let discount = 0;

  if (freeAmountThreshold && freeAmountValue && quantity >= freeAmountThreshold) {
    discount -= Decimal.mul(
      Math.floor(quantity / freeAmountThreshold),
      price
    ).times(freeAmountValue).toNumber();
  }

  return {
    base,
    discount,
    total: base + discount
  };
}
