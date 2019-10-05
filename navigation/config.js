import { createStackNavigator } from "react-navigation-stack";
import { BG_COLOR, TINT_COLOR } from "../constants/Colors";
import { Platform } from "react-native";

export const headerStyles = {
  headerStyle: {
    backgroundColor: BG_COLOR,
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    color: TINT_COLOR,
    ...Platform.select({
      ios: {},
      android: {
        flex: 1,
        textAlign: "center",
        marginTop: -40
      },
    })
  },
  headerTintColor: TINT_COLOR
};

export const createStack = (screen, title) =>
  createStackNavigator({
    Screen: {
      screen,
      navigationOptions: {
        title,
        ...headerStyles
      }
    }
  });
