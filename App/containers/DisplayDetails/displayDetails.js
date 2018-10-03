import React, {Component} from 'react';
import { View, Text } from "react-native";
import { connect } from 'react-redux';
import { Button } from "native-base";
import { updateMarks } from '../../redux/actions/quize';
import styles from './style'
import HeaderContainer from '../../components/Header/index'

class DisplayDetails extends Component{
  constructor(props){
		super(props);
		this.state = {
      marks: 0,
      selected: '',
      answer: ''
		}
  }

  next = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderContainer title="Result" />
        <View style={styles.alignCenter}>
          <View style={{testAlign: 'center'}}>
            <Text style={styles.welcomeText}>Thank you for your time!</Text>
            <Button style={styles.buttonStyle} onPress={() => this.next()}>
              <Text style={styles.buttonTextStyle}>Complete</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    marks: state.quize.marks,
    rating: state.quize.rating
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayDetails)