import React, {Component} from 'react';
import { View, Text } from "react-native";
import { connect } from 'react-redux';
import { Button } from "native-base";
import { updateMarks,resetMarks } from '../../redux/actions/quize';
import styles from './style'
import HeaderContainer from '../../components/Header/index'

class DisplayDetails extends Component{
  constructor(props){
		super(props);
		this.state = {
      marks: this.props.marks,
      rating: this.props.rating
		}
  }

  next = () => {
    this.props.reset()
    this.props.history.push('/');
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderContainer title="Result" />
        <View style={styles.alignCenter}>
          <View style={{marginLeft: 10}}>
            <Text style={styles.welcomeText}>Thank you for your time!</Text>
            <View style={styles.alignRow}>
              <Text style={styles.welcomeText}>Your Total Score is </Text>
              <Text style={styles.totalMarks}>{this.state.marks}</Text>
            </View>
            <View style={styles.alignRow}>
              <Text style={styles.welcomeText}>Your Performance was </Text>
              <Text style={styles.totalMarks}>{this.state.rating}</Text>
            </View>
            <View style={styles.alignButton}>
              <Button style={styles.buttonStyle} onPress={() => this.next()}>
                <Text style={styles.buttonTextStyle}>Complete</Text>
              </Button>
            </View>
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
    reset: () => {
      dispatch(resetMarks())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayDetails)