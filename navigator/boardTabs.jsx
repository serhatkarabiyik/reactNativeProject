import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import User from "../vues/user";
import Home from "../vues/home";
import BoardAjout from "../vues/boardAdd";
import TaskAdd from "../vues/taskAdd";
import Columns from "../vues/columns";

const Tab = createMaterialBottomTabNavigator();

const BoardTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Board" component={Home} />
      <Tab.Screen name="Add" component={BoardAjout} />
      <Tab.Screen name="Tâche" component={Columns} />
      <Tab.Screen name="Profil" component={User} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BoardTabs;
