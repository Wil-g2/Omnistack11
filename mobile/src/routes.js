import React from "react";
import { Naviga, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Incidents from "./pages/Incidents";
import Detail from "./pages/Detail";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="incidents"
          component={Incidents}
          options={{
            headerShown: false
          }}
        />
        <AppStack.Screen
          name="detail"
          component={Detail}
          options={{
            headerShown: false
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
