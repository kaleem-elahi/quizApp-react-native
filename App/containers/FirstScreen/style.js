import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'rgb(255, 2, 2)',
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgb(255, 2, 2)',
    borderRadius: 4
  },
  buttonTextStyle: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Poppins-Regular'
  }
});