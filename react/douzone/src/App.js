import React from 'react';
import logo from './logo.svg';
import { IntlProvider, addLocaleData } from 'react-intl';


import Layouts from './components/Layouts'
import '../src/styles/global.scss';

function App() {
  return (
    <Layouts>
      <div className="App"/>
    </Layouts>
  );
}

export default App;
