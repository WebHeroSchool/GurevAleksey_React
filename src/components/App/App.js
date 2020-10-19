import React, { useLayoutEffect } from 'react';
import InputItems from '../InputItems/InputItems';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

let App = () => (
  <section>
    <h1>Дела:</h1>
    <InputItems />
      <ItemList />
    <Footer />
  </section>
);

export default App;