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

export async function createTask(boardId, columnId, title, description) {
  try {
    const boardCollection = collection(firestore, "boards");

    const boardQuery = query(boardCollection, where("boardId", "==", boardId));

    const querySnapshot = await getDocs(boardQuery);

    let column;
    querySnapshot.forEach(async (doc) => {
      const boardRef = doc.ref;

      const boardData = doc.data();

      const column = boardData.columns.find((col) => col.columnId === columnId);

      if (column) {
        const newTask = {
          taskTitle: title,
          taskDescription: description,
          taskId: uuidv4(),
        };

        // Update the specific column in the board document
        await updateDoc(boardRef, {
          columns: boardData.columns.map((col) => {
            if (col.columnId === columnId) {
              return {
                ...col,
                tasks: [...col.tasks, newTask],
              };
            }
            return col;
          }),
        });
      } else {
        console.error("Column not found");
      }
    });
  } catch (error) {
    console.error("Error adding board: ", error);
    throw new Error("Unable to create board.");
  }
}

export async function deleteTask(boardId, columnId, taskId) {
  try {
    const boardCollection = collection(firestore, "boards");

    const boardQuery = query(boardCollection, where("boardId", "==", boardId));

    const querySnapshot = await getDocs(boardQuery);

    querySnapshot.forEach(async (doc) => {
      const boardRef = doc.ref;

      const boardData = doc.data();

      const column = boardData.columns.find((col) => col.columnId === columnId);

      if (column) {
        const updatedTasks = column.tasks.filter(
          (task) => task.taskId !== taskId
        );

        // Update the specific column in the board document to remove the task
        await updateDoc(boardRef, {
          columns: boardData.columns.map((col) => {
            if (col.columnId === columnId) {
              return {
                ...col,
                tasks: updatedTasks,
              };
            }
            return col;
          }),
        });
      } else {
        console.error("Column not found");
      }
    });
  } catch (error) {
    console.error("Error deleting task: ", error);
    throw new Error("Unable to delete task.");
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
