import React, {Component} from 'react';
import { View, Text } from "react-native";
import { Header, Left, Body, Title } from "native-base";
import styles from './style'

class HeaderContainer extends Component{

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Header
        androidStatusBarColor="rgb(255, 2, 2)"
        style={{ backgroundColor: "rgb(255, 2, 2)" }}
      >
        <Left />
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
      </Header>
    );
  }
}

export default HeaderContainer