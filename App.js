import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { UserContext } from "./context/userContext";
import UserTabs from "./navigator/userTabs";
import BoardTabs from "./navigator/boardTabs";
import ProjectTabs from "./navigator/projectTabs";

import Toast from "react-native-toast-message";

import { toastConfig } from "./utils";

import { createStackNavigator } from "@react-navigation/stack";
import ColumnAdd from "./vues/columnAdd";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState();
  const [board, setBoard] = useState("");

  const [firstConnection, setFirstConnection] = useState(true);

  useEffect(() => {
    if (user && firstConnection) {
      Toast.show({
        type: "success",
        text1: "Succès",
        text2: "Connecter avec succès !",
        text2Style: {
          fontSize: 14,
        },
      });

      setFirstConnection(false);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, board, setBoard }}>
      <NavigationContainer>
        {/* pour changement de navigation quand clique un board */}

        {user ? (
          board ? (
            // Si l'utilisateur est connecté et affiche un tableau, utilisez BoardView
            <ProjectTabs />
          ) : (
            // Si l'utilisateur est connecté mais ne montre pas un tableau, utilisez BoardTabs
            <BoardTabs />
          )
        ) : (
          // Si l'utilisateur n'est pas connecté, utilisez UserTabs
          <UserTabs />
        )}
        <Toast config={toastConfig} />
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
