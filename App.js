/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './App/index'
import congigureStore from './App/redux/store/store'

const store = congigureStore()

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store = { store }>
          <AppNavigator />
      </Provider>
    );
  }
}