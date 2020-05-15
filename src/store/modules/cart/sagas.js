import { call, put, all, takeLatest, delay } from 'redux-saga/effects';
import api from '../../../services/api';

import { addToCartSuccess } from './actions';
import ActionsCart from './const';

function* addToCart({ id }) {
  yield delay(2000);
  const response = yield call(api.get, `products/${id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest(ActionsCart.ADD_REQUEST, addToCart)]);
