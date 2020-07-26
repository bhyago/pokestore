import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import api from '../../services/api';

import Header from '../../components/Header';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';


function Home() {

  const [headerSearch, setHeaderSearch] = useState('');
  const [category, setCategory] = useState([]);

  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
   const getCategory = async () => {
    const response = await api.get(`/type/10`);
    const pokemon = response.data.pokemon;

    setCategory(...category, pokemon);
      };
      getCategory();
  }, []);

  const handleProductClick = (data) => {
    setModalStatus(true);
  }

  return (

  <>
    <Header search={headerSearch} onSearch={setHeaderSearch}/>
    <ProductList>
      { category.map(p => (
        <li key={p.pokemon.name} onClick={handleProductClick}>
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${
          p.pokemon.url.split("/").slice(6,7).toString()}.png`} alt={p.pokemon.name} />
        <strong>{p.pokemon.name}</strong>
          <span>49,90</span>

        <button type="button">
          <div>
           <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      ))
      }
    </ProductList>
    <Modal status={modalStatus} setStatus={setModalStatus}>
      <ModalProduct />
    </Modal>
</>
  );
}

export default Home;
