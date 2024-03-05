import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import React from "react";
import { StyleSheet } from "react-native";
import Register from "../vues/register";
import Login from "../vues/login";

const Tab = createMaterialBottomTabNavigator();

const UserTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inscription"
        component={Register}
        options={{
          tabBarLabel: "Inscription",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="login" size={26} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Connexion"
        component={Login}
        options={{
          tabBarLabel: "Connexion",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-plus" size={26} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default UserTabs;
