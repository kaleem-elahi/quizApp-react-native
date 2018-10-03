import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular'
  }
});