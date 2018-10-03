import React, {Component} from 'react';
import { View, Text } from "react-native";
import { connect } from 'react-redux';
import { Button } from "native-base";
import { updateMarks } from '../../redux/actions/quize';
import styles from './style'
import HeaderContainer from '../../components/Header/index'

class Home extends Component{
  constructor(props){
		super(props);
		this.state = {
		}
  }

  next = () => {
    this.props.history.push('/first');
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderContainer title="Home" />
        <View style={styles.alignCenter}>
          <View style={{testAlign: 'center'}}>
            <Text style={styles.welcomeText}>Welcome User!</Text>
            <Button style={styles.buttonStyle} onPress={() => this.next()}>
              <Text style={styles.buttonTextStyle}>Start Test!</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    marks: state.quize.marks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    save: (mark) => {
      dispatch(updateMarks(mark))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)