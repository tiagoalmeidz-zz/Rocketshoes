import ActionsCart from './const';

export function addToCart(product) {
  return { type: ActionsCart.ADD_TO_CART, product };
}

export function removeFromCart(id) {
  return { type: ActionsCart.REMOVE_FROM_CART, id };
}

export function updateAmount(id, amount) {
  return { type: ActionsCart.UPDATE_AMOUNT, id, amount };
}
