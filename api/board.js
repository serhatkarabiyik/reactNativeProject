import { get, ref, set, onValue } from "firebase/database";
import { database } from "./app";

export async function ajoutBoard(userId, name) {
  try {
    const snap = await get(ref(database, userId));

    const boards = snap.exists() ? snap.val() : [];
    boards.push({
      name: name,
      photos: [],
    });
    set(ref(database, userId), boards);
  } catch (error) {
    throw new Error(error.message);
  }
}

export function getAllBoard(userId) {
  return new Promise((res, rej) => {
    const starCountRef = ref(database, userId);
    onValue(starCountRef, (snapshot) => {
      const boards = snapshot.val();
      res(boards);
    });
  });
}
