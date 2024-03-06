// Importation du composant createMaterialBottomTabNavigator depuis la bibliothèque React Navigation
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Importation de React pour créer des composants React
import React from "react";

// Importation du composant StyleSheet de React Native pour définir des styles
import { StyleSheet } from "react-native";

// Importation des composants Home, TaskAdd et ColumnAdd depuis les fichiers correspondants
import Home from "../vues/home";
import TaskAdd from "../vues/taskAdd";
import ColumnAdd from "../vues/columnAdd";

// Création d'une instance de createMaterialBottomTabNavigator
const Tab = createMaterialBottomTabNavigator();

// Définition du composant ProjectTabs qui représente l'écran avec un onglet de navigation
const ProjectTabs = () => {
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

      {/* Onglet "Column add" avec l'écran ColumnAdd */}
      <Tab.Screen
        name="Column add"
        component={ColumnAdd}
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle" size={26} />
          ),
        }}
      />

      {/* Onglet "Tâche add" avec l'écran TaskAdd */}
      <Tab.Screen name="Tâche add" component={TaskAdd} />
    </Tab.Navigator>
  );
};

// Styles (actuellement vides, peuvent être remplis en fonction des besoins)
const styles = StyleSheet.create({});

// Exportation du composant ProjectTabs pour pouvoir l'utiliser ailleurs dans l'application
export default ProjectTabs;
