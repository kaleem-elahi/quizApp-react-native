/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View } from "react-native";
import { NativeRouter, Route } from "react-router-native"

import Home from './containers/Home/index'
import FirstScreen from './containers/FirstScreen/index'
import SecondScreen from './containers/SecondScreen/index'
import ThirdScreen from './containers/ThirdScreen/index'
import DisplayDetails from './containers/DisplayDetails/index'

type Props = {};
export default class AppNavigator extends Component<Props> {
  render() {
    return (
      <NativeRouter>
        <View>
          <Route exact path="/" component={Home} />
          <Route path="/first" component={FirstScreen} />
          <Route path="/second" component={SecondScreen} />
          <Route path="/third" component={ThirdScreen} />
          <Route path="/result" component={DisplayDetails} />
        </View>
      </NativeRouter>
    );
  }
}