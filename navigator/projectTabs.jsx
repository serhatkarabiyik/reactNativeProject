// Importation du composant createMaterialBottomTabNavigator depuis la bibliothèque React Navigation
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Importation de React pour créer des composants React
import React from "react";

// Importation du composant MaterialCommunityIcons depuis la bibliothèque react-native-vector-icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Importation du composant StyleSheet de React Native pour définir des styles
import { StyleSheet } from "react-native";

// Importation des composants Home, TaskAdd et ColumnAdd depuis les fichiers correspondants
import Home from "../vues/home";
import ColumnAdd from "../vues/columnAdd";
import Columns from "../vues/columns";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

// Création d'une instance de createMaterialBottomTabNavigator
const Tab = createMaterialBottomTabNavigator();

// Définition du composant ProjectTabs qui représente l'écran avec un onglet de navigation
const ProjectTabs = () => {
  return (
    <>
      {/* // Utilisation du Tab.Navigator pour définir la structure de l'onglet */}
      <Tab.Navigator initialRouteName="Columns">
        <Tab.Screen
          name="Columns"
          component={Columns}
          // Options de l'onglet, telles que le label et l'icône
          options={{
            tabBarLabel: "Colonnes",
            tabBarIcon: ({ color }) => (
              // Icône de l'onglet utilisant le composant MaterialCommunityIcons
              <MaterialCommunityIcons name="view-dashboard" size={26} />
            ),
          }}
        />
        {/* Onglet "Column add" avec l'écran ColumnAdd */}
        <Tab.Screen
          name="columnAdd"
          component={ColumnAdd}
          options={{
            tabBarLabel: "Ajouter",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus-circle" size={26} />
            ),
          }}
        />

        {/* Onglet "Board" avec l'écran Home */}
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Accueil",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

// Styles (actuellement vides, peuvent être remplis en fonction des besoins)
const styles = StyleSheet.create({});

// Exportation du composant ProjectTabs pour pouvoir l'utiliser ailleurs dans l'application
export default ProjectTabs;
