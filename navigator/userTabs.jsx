// Importation du composant createMaterialBottomTabNavigator depuis la bibliothèque React Navigation
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Importation du composant MaterialCommunityIcons depuis la bibliothèque react-native-vector-icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Importation de React pour créer des composants React
import React from "react";

// Importation du composant StyleSheet de React Native pour définir des styles
import { StyleSheet } from "react-native";

// Importation des composants Register et Login depuis les fichiers correspondants
import Register from "../vues/register";
import Login from "../vues/login";

// Création d'une instance de createMaterialBottomTabNavigator
const Tab = createMaterialBottomTabNavigator();

// Définition du composant UserTabs qui représente l'écran avec un onglet de navigation pour les utilisateurs
const UserTabs = () => {
  return (
    // Utilisation du Tab.Navigator pour définir la structure de l'onglet
    <Tab.Navigator>
      {/* Onglet "Connexion" avec l'écran Login */}
      <Tab.Screen
        name="Connexion"
        component={Login}
        options={{
          tabBarLabel: "Connexion",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="login" size={26} />
          ),
        }}
      ></Tab.Screen>
      {/* Onglet "Inscription" avec l'écran Register */}
      <Tab.Screen
        name="Inscription"
        component={Register}
        // Options de l'onglet, telles que le label et l'icône
        options={{
          tabBarLabel: "Inscription",
          tabBarIcon: ({ color }) => (
            // Icône de l'onglet utilisant le composant MaterialCommunityIcons
            <MaterialCommunityIcons name="account-plus" size={26} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

// Styles (actuellement vides, peuvent être remplis en fonction des besoins)
const styles = StyleSheet.create({});

// Exportation du composant UserTabs pour pouvoir l'utiliser ailleurs dans l'application
export default UserTabs;
