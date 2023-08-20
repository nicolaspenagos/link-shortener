import { ref, set } from "firebase/database";
import { database } from "./config";

export const addLink = async (link: string) => {
  try {
    await set(ref(database, "shortenedLinks"), {
      username: "asdkja",
    });
  } catch (error) {
    console.error("Error writing link to the database", error);
  }
};
