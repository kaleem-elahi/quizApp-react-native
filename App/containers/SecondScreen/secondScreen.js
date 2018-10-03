import React, {Component} from 'react';
import { View, CheckBox } from "react-native";
import { connect } from 'react-redux';
import { Button, Card, CardItem, Body, Text } from "native-base";
import TimerCountdown from 'react-native-timer-countdown';
import { updateMarks } from '../../redux/actions/quize';
import styles from './style'
import HeaderContainer from '../../components/Header/index'

class SecondScreen extends Component{
  constructor(props){
		super(props);
		this.state = {
      marks: this.props.marks || 0,
      selected: null,
      answer: 0,
      questions: [
        {
          index: 0,
          title: '12'
        },
        {
          index: 1,
          title: '11'
        },
        {
          index: 2,
          title: '7'
        },
        {
          index: 3,
          title: '3'
        }
      ]
    }
  }

  checkAnswer = () => {
    if(this.state.answer === this.state.selected) {
      const total = this.state.marks + 10
      this.props.save(total, '')
      this.props.history.push('/third')
    } else {
      const total = this.state.marks - 1
      this.props.save(total, '')
      this.props.history.push('/third')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderContainer title="Second Question" />
        <View style={styles.alignCenter}>
          <Card>
            <CardItem header bordered>
              <View style={styles.alignHeader}>
                <View>
                  <Text style={{color: 'rgb(255, 2, 2)'}}>Question</Text>
                </View>
                <View>
                  <TimerCountdown
                    initialSecondsRemaining={1000*120}
                    onTimeElapsed={() => this.checkAnswer()}
                    allowFontScaling={true}
                    style={{ fontSize: 20, color: 'rgb(255, 2, 2)' }}
                  />
                </View>
              </View>
            </CardItem>
            <CardItem bordered>
            <Body>
              <Text>What is square root of 144?</Text>
              <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                {this.state.questions.map((element, key) => {
                  return (
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <CheckBox value={this.state.selected === key ? true : false} style={{color: 'red'}} onChange={() => this.setState({selected: key})} /><Text>{element.title}</Text>
                    </View>
                  )
                })}
              </View>
            </Body>
            </CardItem>
            <CardItem footer bordered style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
              <Button style={styles.buttonStyle}onPress={() => this.checkAnswer()}>
                <Text style={styles.buttonTextStyle}>Next</Text>
              </Button>
            </CardItem>
          </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen)