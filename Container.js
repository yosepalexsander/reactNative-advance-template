import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Import Theme Native Base
import { useTheme } from "native-base";

// Import Screen
import FormNativeBase from "./src/screens/formNativeBase";
import Hello from "./src/screens/hello";
import IncDec from "./src/screens/incDec";

// Create Stack Navigation
const Stack = createStackNavigator();

export default function Container() {
  // Init Theme
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: theme.colors.primary["300"] },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Hello}
          options={{
            title: "Home Screen",
          }}
        />
        <Stack.Screen
          name="InDec"
          component={IncDec}
          options={{
            title: "Increment Decrement",
          }}
        />
        <Stack.Screen
          name="Signin"
          component={FormNativeBase}
          options={{
            title: "Sign In",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
