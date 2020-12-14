import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './store/store';
import { Provider } from 'react-redux'

import App from './App'

const render = () => ReactDOM.render(
  <Provider store={Store}>
     <Index />
  </Provider>
, document.getElementById('root'));

Store.subscribe(render);

const Index = () =>{
  return(
     <App />
  );
}

render();

export default Index;
