import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";

const MainNavigation = createStackNavigator({
  Tabs: { screen: TabNavigation, navigationOptions: { title: null } },
  Detail: DetailScreen
},
{
    mode: "card"
});

export default createAppContainer(MainNavigation);
