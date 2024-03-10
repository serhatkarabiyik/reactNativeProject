import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Columns from "../vues/columns";
import TaskDetail from "../vues/taskDetail";
const Stack = createStackNavigator();

const TaskStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Liste des colonnes" component={Columns} />
      <Stack.Screen name="Détail" component={TaskDetail} />
    </Stack.Navigator>
  );
};

export default TaskStack;
