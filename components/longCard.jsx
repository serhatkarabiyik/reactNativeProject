// Importation des dépendances nécessaires depuis React et React Native
import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

// Importation des styles globaux et des composants nécessaires depuis React Native Paper et RNEUI
import { globalStyles } from "../styles/globalStyles";
import { Text } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { Card, Icon } from "@rneui/themed";

// Définition du composant LongCard qui représente une carte longue dans l'application
const LongCard = ({ data, nav }) => {
  // Utilisation du contexte UserContext pour accéder à setBoard
  const { setBoard } = useContext(UserContext);

  // Fonction pour gérer le clic sur la carte
  const handleClick = () => {
    // Définition du tableau actuel en utilisant setBoard du contexte
    setBoard(data.boardId);
    // Naviguer vers la destination souhaitée (à remplacer par votre destination réelle)
    nav.navigate("");
  };

  return (
    // Utilisation du composant Card pour créer la structure de la carte
    <Card>
      {/* Utilisation de TouchableOpacity pour rendre la carte cliquable */}
      <TouchableOpacity onPress={handleClick}>
        {/* Utilisation de Card.Title pour afficher le nom de la carte */}
        <Card.Title>{data.name}</Card.Title>
      </TouchableOpacity>

      {/* Icône de corbeille pour supprimer la carte */}
      <Icon name="trash" type="font-awesome" color="#BF0808" />

      {/* Icône de stylo pour éditer la carte */}
      <Icon name="pen" type="font-awesome" color="#1E3050" />
    </Card>
  );
};

// Exportation du composant LongCard pour pouvoir l'utiliser ailleurs dans l'application
export default LongCard;
