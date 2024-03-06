import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { UserContext } from "./context/userContext";

import UserTabs from "./navigator/userTabs";
import BoardTabs from "./navigator/boardTabs";
import ProjectTabs from "./navigator/projectTabs";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState();

  const [board, setBoard] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser, board, setBoard }}>
      <NavigationContainer>
        {/* pour changement de navigation quand clique un board
        
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
        )} */}
        <UserContext.Provider value={{ user, setUser, board, setBoard }}>
          <NavigationContainer>
            {user ? <BoardTabs /> : <UserTabs />}
          </NavigationContainer>
        </UserContext.Provider>
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
