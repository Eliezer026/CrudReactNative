import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserCreate from "../Views/UserCreate";
import UserDelete from "../Views/UserDelete";
import UserList from "../Views/UserList";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: true,
};

const NavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="UserList"
        component={UserList}
        options={{ title: " User List" }}
      />
      <Stack.Screen
        name="UserCreate"
        component={UserCreate}
        options={{ title: " User Create" }}
      />
      <Stack.Screen
        name="UserDelete"
        component={UserDelete}
        options={{ title: " User Detail" }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
