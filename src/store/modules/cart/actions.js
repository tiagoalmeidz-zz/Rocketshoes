import ActionsCart from './const';

export function addToCartRequest(id) {
  return {
    type: ActionsCart.ADD_REQUEST,
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: ActionsCart.ADD_SUCCESS,
    product,
  };
}

export function removeFromCart(id) {
  return { type: ActionsCart.REMOVE_FROM_CART, id };
}

export function updateAmount(id, amount) {
  return { type: ActionsCart.UPDATE_AMOUNT, id, amount };
}
