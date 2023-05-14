

import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

export const getFiles = async (id) => {

    try {
        const querySnapshot = await getDocs(collection(db, `users/${id}/images`));
        const images = querySnapshot.docs.map((doc) => doc.data());

        return images;

    } catch (error) {
        console.log(error)
    }
}