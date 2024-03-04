import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import Register from "../vues/register";
import Login from "../vues/login";

const Tab = createMaterialBottomTabNavigator();

const UserTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inscription" component={Register}></Tab.Screen>
      <Tab.Screen name="Connexion" component={Login}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default UserTabs;
