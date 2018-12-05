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
    textAlign: 'center',
    marginTop: 10
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
  },
  totalMarks: {
    color: 'rgb(255, 2, 2)',
    fontSize: 18,
    fontFamily: 'Poppins-Bold'
  },
  alignButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});