import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.css';
import { Layout } from './shared/Layout';
import { Home } from './components/Home';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path={'/'} element={<Home />} />
          </Routes>
        </Layout>
      </Provider>
    );
  }
}
