import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-masculino/12/COL-7070-012/COL-7070-012_zoom2.jpg?ts=1584624042&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Adidas</strong>
        <span>R$ 189,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-8k-2020-masculino/34/NQQ-0062-034/NQQ-0062-034_zoom2.jpg?ts=1585089503&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Adidas</strong>
        <span>R$ 219,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-nova-flow-masculino/14/NQQ-0540-014/NQQ-0540-014_zoom2.jpg?ts=1583407477&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Adidas</strong>
        <span>R$ 189,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-energy-falcon-masculino/26/COL-6983-026/COL-6983-026_zoom2.jpg?ts=1583407484&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Adidas</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-new-balance-fresh-foam-roav-corrida-masculino/60/D17-4718-060/D17-4718-060_zoom2.jpg?ts=1586265274&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis New Balance</strong>
        <span>R$ 499,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-hawk-2-masculino/78/D16-4274-178/D16-4274-178_zoom2.jpg?ts=1588786258&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Mizuno</strong>
        <span>R$ 329,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
