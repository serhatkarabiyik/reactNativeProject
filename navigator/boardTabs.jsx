import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import User from "../vues/user";
import Home from "../vues/home";

const Tab = createMaterialBottomTabNavigator();

const BoardTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Board" component={Home} />
      <Tab.Screen name="Profil" component={User} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BoardTabs;
