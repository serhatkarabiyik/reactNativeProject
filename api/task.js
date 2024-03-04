import { get, onValue, ref, set } from "firebase/database";
import { database, storage } from "./app";

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
