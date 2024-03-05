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

export function getAllTask(userId) {
  return new Promise((res, rej) => {
    const starCountRef = ref(database, userId);
    onValue(starCountRef, (snapshot) => {
      const tasks = snapshot.val();
      const indexTask = tasks.findIndex((c) => c.name === nomCarnet);
      if (indexTask != -1) {
        res(tasks[indexTask].task);
      } else {
        throw new Error("Tache non trouvé");
      }
    });
  });
}

export async function createTask(userId, columnId, title, description) {
  try {
    const boardCollection = collection(firestore, "boards");

    const boardQuery = query(boardCollection, where("createdBy", "==", userId));

    const querySnapshot = await getDocs(boardQuery);

    const column = querySnapshot
      .data()
      .columns.find((col) => col.idColumn === columnId);

    const newTask = {
      titleTask: title,
      descriptionTask: description,
      idTask: Math.floor(Math.random()),
    };

    // await updateDoc(boardDocRef, {
    //   tasks: [...column.tasks, newTask],
    // });
  } catch (error) {
    console.error("Error adding board: ", error);
    throw new Error("Unable to create board.");
  }
}

export async function getAllTaskOfColumn(userId, columnId) {
  try {
    // Créez une requête filtrée pour récupérer uniquement les tasks de la column
    const boardCollection = collection(firestore, "boards");
    const boardQuery = query(boardCollection, where("createdBy", "==", userId));

    const querySnapshot = await getDocs(boardQuery);
    const tasks = [];

    querySnapshot.forEach((doc) => {
      const column = doc
        .data()
        .columns.filter((column) => column.idColumn === 1)[0];

      const { tasks } = column;

      return tasks;
    });
  } catch (error) {
    console.error("Error getting projects: ", error);
    throw new Error("Unable to get projects.");
  }
}
