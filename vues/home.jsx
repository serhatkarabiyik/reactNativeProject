// Importation des dépendances nécessaires depuis React et React Native
import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

// Importation du contexte utilisateur
import { UserContext } from "../context/userContext";

// Importation de la fonction getAllBoard depuis le fichier d'API board
import { getAllBoard } from "../api/board";

// Importation du composant LongCard pour afficher les cartes longues
import LongCard from "../components/longCard";

// Définition du composant Home qui représente l'écran d'accueil de l'application
const Home = ({ navigation }) => {
  // État local pour stocker la liste des tableaux (boards)
  const [boards, setBoards] = useState([]);

  // Utilisation du contexte utilisateur pour obtenir les informations de l'utilisateur connecté
  const { user, setBoard } = useContext(UserContext);

  // Effet secondaire pour charger les tableaux à chaque changement de navigation (focus sur l'écran)
  useEffect(() => {
    // Ajout d'un écouteur pour détecter le focus sur l'écran
    const unsubscribe = navigation.addListener("focus", () => {
      // Appel de la fonction pour charger les tableaux
      loadBoards();
    });

    // Nettoyage de l'écouteur lorsqu'il n'est plus nécessaire
    return unsubscribe;
  }, [navigation]);

  // Effet secondaire pour charger les tableaux au chargement initial de l'écran
  useEffect(() => {
    // Appel de la fonction pour charger les tableaux
    loadBoards();
    setBoard("");
  }, []);

  // Fonction pour charger les tableaux depuis la base de données
  const loadBoards = async () => {
    try {
      // Appel de la fonction de l'API pour récupérer les tableaux de l'utilisateur
      const loadedBoards = await getAllBoard(user.uid);

      // Mise à jour de l'état local avec la liste des tableaux
      setBoards(loadedBoards);
    } catch (error) {
      // Affichage de l'erreur dans la console en cas d'échec
      console.error("Error loading boards:", error);
      // Gérer l'erreur de chargement des projets (tableaux)
    }
  };

  // Rendu du composant Home
  return (
    <View style={styles.container}>
      <Text>Liste des projets</Text>

      {/* Utilisation de FlatList pour afficher la liste des tableaux sous forme de cartes longues */}
      <FlatList
        data={boards}
        renderItem={({ item }) => <LongCard data={item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

// Styles pour le composant Home
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  button: {
    backgroundColor: "red",
    width: 100,
    height: 100,
  },
});

// Exportation du composant Home pour pouvoir l'utiliser ailleurs dans l'application
export default Home;
