// Importation des dépendances Firebase pour Firestore
import { query } from "firebase/database";
import { firestore } from "./app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  where,
} from "@firebase/firestore";

// Importation de la bibliothèque uuid pour générer des identifiants uniques
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

// Fonction pour ajouter un nouveau tableau (board) dans Firestore
export async function ajoutBoard(userId, name) {
  try {
    // Collection Firestore pour les tableaux (boards)
    const boardCollection = collection(firestore, "boards");

    // Ajout d'un nouveau document à la collection avec les données spécifiées
    const newBoardRef = await addDoc(boardCollection, {
      name: name,
      createdBy: userId,
      boardId: uuidv4(), // Génération d'un nouvel identifiant unique pour le tableau
      columns: [],
    });

    // Affichage du message de succès dans la console
    console.log("New board added with ID: ", newBoardRef.id);

    // Retourne l'identifiant du nouveau tableau créé
    return newBoardRef.id;
  } catch (error) {
    // Affichage d'une erreur dans la console en cas d'échec
    console.error("Error adding board: ", error);

    // Lancer une erreur pour indiquer qu'il y a eu un problème lors de la création du tableau
    throw new Error("Unable to create board.");
  }
}

// Fonction pour supprimer un tableau (board) de Firestore
export async function suppBoard(boardId) {
  try {
    // Référence au document du tableau à supprimer
    const boardRef = doc(firestore, "boards", boardId);

    // Suppression du document du tableau
    await deleteDoc(boardRef);

    // Affichage du message de suppression dans la console
    console.log("Board deleted:", boardId);
  } catch (error) {
    // Affichage d'une erreur dans la console en cas d'échec
    console.error("Error deleting board:", error);

    // Lancer une erreur pour indiquer qu'il y a eu un problème lors de la suppression du tableau
    throw new Error("Unable to delete board.");
  }
}

// Fonction pour récupérer tous les tableaux (boards) créés par un utilisateur spécifique
export async function getAllBoard(userId) {
  try {
    // Création d'une requête filtrée pour récupérer uniquement les tableaux créés par l'utilisateur
    const boardCollection = collection(firestore, "boards");
    const boardQuery = query(boardCollection, where("createdBy", "==", userId));

    // Exécution de la requête et récupération du snapshot des résultats
    const querySnapshot = await getDocs(boardQuery);

    // Initialisation d'un tableau pour stocker les données des tableaux
    const boards = [];

    // Parcours des résultats de la requête et ajout des données au tableau
    querySnapshot.forEach((doc) => {
      boards.push({ id: doc.id, ...doc.data() });
    });

    // Retourne le tableau de tous les tableaux créés par l'utilisateur
    return boards;
  } catch (error) {
    // Affichage d'une erreur dans la console en cas d'échec
    console.error("Error getting boards: ", error);

    // Lancer une erreur pour indiquer qu'il y a eu un problème lors de la récupération des tableaux
    throw new Error("Unable to get boards.");
  }
}
