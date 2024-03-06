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

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export async function createColumn(userId, boardId, title) {
  try {
    const boardCollection = collection(firestore, "boards");
    const boardQuery = query(boardCollection, where("boardId", "==", boardId));

    const querySnapshot = await getDocs(boardQuery);

    querySnapshot.forEach((doc) => {
      console.log(doc);
    });

    // const newColumn = await addDoc(boardCollection, {
    //   name: name,
    // });
    // return newBoardRef.id;
  } catch (error) {
    console.error("Error adding board: ", error);
    throw new Error("Unable to create board.");
  }
}
