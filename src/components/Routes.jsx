import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ActivityScreen from "../screens/ActivityScreen";
import MapScreen from "../screens/MapScreen";
import VoteScreen from "../screens/VoteScreen";
import DashboardScreen from "../screens/DashboardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const isUser = useSelector((state) => state.user.phone);

  // const stackLogin = () => {
  //     return (
  //         <Stack.Navigator screenOptions={{ headerShown: false }}>
  //             <Stack.Screen name="Login" component={LoginScreen} />
  //         </Stack.Navigator>
  //     );
  // }

  //   if (!isUser) {
  //     return (
  //       <NavigationContainer>
  //         {stackLogin()}
  //         ////
  //       </NavigationContainer>
  //     );
  //   }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="VoteScreen" component={VoteScreen} />
        <Stack.Screen name="Activity" component={ActivityScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
