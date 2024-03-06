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

export async function createColumn(userId, boardId, title) {
  try {
    const boardCollection = collection(firestore, "boards");
    const boardQuery = query(boardCollection, where("boardId", "==", boardId));

    const querySnapshot = await getDocs(boardQuery);

    if (querySnapshot.empty) {
      throw new Error("Board not found");
    }

    querySnapshot.forEach(async (doc) => {
      const boardRef = doc.ref;
      console.log(doc.data().columns);
      let columns = doc.data().columns || [];

      const newColumn = {
        columnId: uuidv4(),
        tasks: [],
        columnTitle: title,
      };

      columns.push(newColumn);
      console.log(columns);
      await updateDoc(boardRef, { columns });
    });

    // return newBoardRef.id;
  } catch (error) {
    console.error("Error adding board: ", error);
    throw new Error("Unable to create board.");
  }
}
