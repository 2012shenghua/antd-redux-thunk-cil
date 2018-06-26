import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuPage from './components/MenuPage/index'
import Routes from './routes.js'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <div className="flex">
              <MenuPage></MenuPage>
              <div style={{ flexGrow: '1', textAlign: 'left' }}>
                <Routes></Routes>
              </div>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
