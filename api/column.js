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
  updateDoc,
} from "@firebase/firestore";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

// createColumn need boardId and title to column
export async function createColumn(boardId, title) {
  try {
    const boardCollection = collection(firestore, "boards");
    const boardQuery = query(boardCollection, where("boardId", "==", boardId));

    const querySnapshot = await getDocs(boardQuery);

    if (querySnapshot.empty) {
      throw new Error("Board not found");
    }

    querySnapshot.forEach(async (doc) => {
      const boardRef = doc.ref;
      let columns = doc.data().columns || [];

      const newColumn = {
        columnId: uuidv4(),
        tasks: [],
        columnTitle: title,
      };

      columns.push(newColumn);
      await updateDoc(boardRef, { columns });
    });
  } catch (error) {
    console.error("Error adding column: ", error);
    throw new Error("Unable to create column.");
  }
}

// updateColumn need boardId , columnId and newTitle to update
export async function updateColumn(boardId, columnId, title) {
  try {
    const boardCollection = collection(firestore, "boards");
    const boardQuery = query(boardCollection, where("boardId", "==", boardId));

    const querySnapshot = await getDocs(boardQuery);

    if (querySnapshot.empty) {
      throw new Error("Board not found");
    }

    querySnapshot.forEach(async (doc) => {
      const boardRef = doc.ref;
      let columns = doc.data().columns || [];
      columns = columns.map((column) => {
        if (column.columnId === columnId) {
          return { ...column, columnTitle: title };
        } else {
          return column;
        }
      });
      await updateDoc(boardRef, { columns });
    });
  } catch (error) {
    console.error("Error adding board: ", error);
    throw new Error("Unable to create board.");
  }
}

// deleteColumn need boardId & columnId
export async function deleteColumn(boardId, columnId) {
  try {
    const boardCollection = collection(firestore, "boards");
    const boardQuery = query(boardCollection, where("boardId", "==", boardId));

    const querySnapshot = await getDocs(boardQuery);

    if (querySnapshot.empty) {
      throw new Error("Board not found");
    }

    querySnapshot.forEach(async (doc) => {
      const boardRef = doc.ref;
      let columns = doc.data().columns || [];

      columns = columns.filter((column) => column.columnId !== columnId);

      await updateDoc(boardRef, { columns });
    });
  } catch (error) {
    console.error("Error deleting column: ", error);
    throw new Error("Unable to delete column.");
  }
}

// getAllColumnOfBoard need boardId
export async function getAllColumnOfBoard(boardId) {
  try {
    const boardCollection = collection(firestore, "boards");
    const boardQuery = query(boardCollection, where("boardId", "==", boardId));

    const querySnapshot = await getDocs(boardQuery);

    if (querySnapshot.empty) {
      throw new Error("Board not found");
    }

    let columns = [];
    querySnapshot.forEach((doc) => {
      columns = doc.data().columns || [];
    });

    return columns;
  } catch (error) {
    console.error("Error getting projects: ", error);
    throw new Error("Unable to get projects.");
  }
}
