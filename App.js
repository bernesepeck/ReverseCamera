import React, { Component } from 'react';
import Main from './main'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}> 
        <Main />
      </Provider>
    )
  }
}
