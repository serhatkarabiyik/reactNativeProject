// Importation du composant createMaterialBottomTabNavigator depuis la bibliothèque React Navigation
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Importation de React pour créer des composants React
import React from "react";

// Importation du composant StyleSheet de React Native pour définir des styles
import { StyleSheet } from "react-native";

// Importation des composants User, Home, BoardAjout, TaskAdd et Columns depuis les fichiers correspondants
import User from "../vues/user";
import Home from "../vues/home";
import BoardAjout from "../vues/boardAdd";
import TaskAdd from "../vues/taskAdd";
import Columns from "../vues/columns";

// Création d'une instance de createMaterialBottomTabNavigator
const Tab = createMaterialBottomTabNavigator();

// Définition du composant BoardTabs qui représente l'écran avec un onglet de navigation
const BoardTabs = () => {
  return (
    // Utilisation du Tab.Navigator pour définir la structure de l'onglet
    <Tab.Navigator>
      {/* Onglet "Board" avec l'écran Home */}
      <Tab.Screen
        name="Board"
        component={Home}
        // Options de l'onglet, telles que le label et l'icône
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            // Icône de l'onglet utilisant le composant MaterialCommunityIcons
            <MaterialCommunityIcons name="view-dashboard" size={26} />
          ),
        }}
      />

      {/* Onglet "Add" avec l'écran BoardAjout */}
      <Tab.Screen
        name="Add"
        component={BoardAjout}
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle" size={26} />
          ),
        }}
      />

      {/* Onglet "Tâche" avec l'écran Columns */}
      <Tab.Screen name="Tâche" component={Columns} />

      {/* Onglet "Profil" avec l'écran User */}
      <Tab.Screen
        name="Profil"
        component={User}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Styles (actuellement vides, peuvent être remplis en fonction des besoins)
const styles = StyleSheet.create({});

// Exportation du composant BoardTabs pour pouvoir l'utiliser ailleurs dans l'application
export default BoardTabs;
