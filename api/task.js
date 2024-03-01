import { get, onValue, ref, set } from "firebase/database";
import { getDownloadURL, ref as refB, uploadBytes } from "firebase/storage";
import { database, storage } from "./app";

export function uploadFile(fich, nom) {
  return new Promise((res, rej) => {
    // Why are we using XMLHttpRequest? See: // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", fich, true);
      xhr.send(null);
    })
      .then((blob) => {
        console.log(blob);
        const fileRef = refB(storage, nom);
        uploadBytes(fileRef, blob).then((snapshot) => {
          // We're done with the blob, close and release it
          blob.close();
          res(getDownloadURL(fileRef));
        });
      })
      .catch((err) => rej(err.message));
  });
}

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
