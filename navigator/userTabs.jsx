import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import Register from "../vues/register";
import Login from "../vues/login";

const Tab = createMaterialBottomTabNavigator();

const LogTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default LogTabs;
