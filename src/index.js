/*
git subtree push --prefix dist origin gh-pages
git remote add -f tpope-vim-surround https://bitbucket.org/vim-plugins-mirror/vim-surround.git
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/portfolio'>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
