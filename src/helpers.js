export function formatPrice(amount) {
  return amount.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });
}
