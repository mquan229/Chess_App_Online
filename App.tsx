import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import CreateRoom from "./screen/CreateRoom";
import GameScreen from "./screen/GameScreen";
import ListRoom from "./screen/ListRoom";


const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
          /> */}
          <Stack.Screen
            name="Room"
            component={ListRoom}
          />
          <Stack.Screen
            name="GameScreen"
            component={GameScreen}
          />
          <Stack.Screen
            name="CreateRoom"
            component={CreateRoom}
          />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default App;
