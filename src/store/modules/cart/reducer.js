import produce from 'immer';
import ActionsCart from './const';

export default function cart(state = [], action) {
  switch (action.type) {
    case ActionsCart.ADD_SUCCESS:
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });
    case ActionsCart.REMOVE_FROM_CART:
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.id
        );

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case ActionsCart.UPDATE_AMOUNT_SUCCESS: {
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
