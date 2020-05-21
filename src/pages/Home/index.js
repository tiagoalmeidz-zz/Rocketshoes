import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList, Loading } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  async function fetchProducts() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return loading ? (
    <Loading>
      <Loader type="ThreeDots" color="#FFFFFF" />
    </Loading>
  ) : (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />{' '}
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
