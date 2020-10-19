import React, { useLayoutEffect } from 'react';


let ItemList = () => (
  <ul>
    <li>One</li>
    <li>Two</li>
  </ul>
);

let App = () => (
  <section>
    <h1>To Do</h1>
    <ItemList />
  </section>
);

export default App;