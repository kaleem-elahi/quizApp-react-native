import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#e8e8e8"
  },
  alignCenter: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  welcomeText: {
    color: 'rgb(255, 2, 2)',
    fontSize: 16,
    fontFamily: 'Poppins-Regular'
  },
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