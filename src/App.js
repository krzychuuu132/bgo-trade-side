import React from 'react';

import Header from './Header/Header';
import Article from './Article/Article';
import Main from './Main/Main';

import "./styles/style.scss";
import "./styles/global_styles.scss";
import Footer from './Main/Footer/Footer';


const App  = () => {
  return (
    <div className="App">
          <Header/>
          <Article />
          <Main />
          <Footer />
    </div>
  );
}

export default App;
