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

export async function ajoutBoard(userId, name) {
  try {
    const boardCollection = collection(firestore, "boards");
    const newBoardRef = await addDoc(boardCollection, {
      name: name,
      createdBy: userId,
    });
    console.log("New board added with ID: ", newBoardRef.id);
    return newBoardRef.id;
  } catch (error) {
    console.error("Error adding board: ", error);
    throw new Error("Unable to create board.");
  }
}
export async function suppBoard(boardId) {
  try {
    const boardRef = doc(firestore, "boards", boardId);
    await deleteDoc(boardRef);
    console.log("Board deleted:", boardId);
  } catch (error) {
    console.error("Error deleting board:", error);
    throw new Error("Unable to delete board.");
  }
}
export async function getAllBoard(userId) {
  try {
    // Créez une requête filtrée pour récupérer uniquement les projets créés par l'utilisateur
    const boardCollection = collection(firestore, "boards");
    const boardQuery = query(boardCollection, where("createdBy", "==", userId));

    const querySnapshot = await getDocs(boardQuery);
    const boards = [];

    querySnapshot.forEach((doc) => {
      boards.push({ id: doc.id, ...doc.data() });
    });

    return boards;
  } catch (error) {
    console.error("Error getting projects: ", error);
    throw new Error("Unable to get projects.");
  }
}
