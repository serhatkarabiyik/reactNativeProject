// Importation de React pour créer des composants React
import React from "react";

// Importation du composant Platform et StyleSheet de React Native pour définir des styles
import { Platform, StyleSheet, View } from "react-native";

// Définition du composant StatusBarBackground qui représente une barre de statut (status bar) personnalisée
const StatusBarBackground = ({}) => {
  return <View style={styles.statusBarBackground}></View>;
};

// Styles définissant la hauteur de la barre de statut et la couleur de fond
const styles = StyleSheet.create({
  statusBarBackground: {
    height: Platform.OS === "ios" ? 60 : 0, // Si la plateforme est iOS, la hauteur est de 60, sinon 0 (les applications Android ont leur propre barre de statut)
    backgroundColor: "grey", // Couleur de fond de la barre de statut
  },
});

// Exportation du composant StatusBarBackground pour pouvoir l'utiliser ailleurs dans l'application
export default StatusBarBackground;
