import admin from "firebase-admin";
import { readFileSync } from "fs";
const serviceAccount = JSON.parse(
  readFileSync("C:/Users/sagni/VS/MAJOR PROJECTS/InterLeet/IL_Backend/firebaseconfig.json", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
export {db};