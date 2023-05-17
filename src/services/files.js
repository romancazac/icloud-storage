

import { collection, getDocs, doc, addDoc, updateDoc,where,query,deleteDoc } from "firebase/firestore";
import { db, storage } from '../firebase';

import { ref, uploadBytesResumable, getDownloadURL,deleteObject } from "firebase/storage";



export const getFiles = async (id) => {

    try {
        const querySnapshot = await getDocs(collection(db, `users/${id}/images`));
        const images = querySnapshot.docs.map((doc) => doc.data());

        return images;

    } catch (error) {
        console.log(error)
    }
}


export const postFile = async (file, user, setProgress, id) => {
    try {
        // Creează o referință către subcolecția "images" a utilizatorului curent
        const imagesRef = collection(db, "users", user.uid, "images");

        // Adaugă un nou document în subcolecția "images" cu informații despre imaginea încărcată
        const docRef = await addDoc(imagesRef, {
            filename: file.name,
            url: "",
            createdAt: new Date(),
            id
        });

        // Încarcă fișierul în Firebase Storage și urmărește progresul încărcării
        const fileRef = ref(storage, `images/${user.uid}/${docRef.id}`);
        const uploadTask = uploadBytesResumable(fileRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                // Actualizează starea de progres
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                // Încărcarea s-a terminat cu succes
                getDownloadURL(fileRef).then((downloadUrl) => {
                    // Actualizează URL-ul de descărcare al imaginii în documentul din subcolecția "images"
                    updateDoc(doc(db, "users", user.uid, "images", docRef.id), {
                        url: downloadUrl,
                    });
                });
            }
        );
    } catch (error) {
        console.log(error);
    }
};

export const removeFile = async (id,user) => {
    try {
    const imagesRef = collection(db, "users", `${user.uid}`, "images");

      const q = query(imagesRef, where('id', '==', id));
      const querySnapshot = await getDocs(q);
  
      const deleteFile = querySnapshot.docs.map(async (doc) => {
        const fileRef = ref(storage, `images/${user.uid}/${doc.id}`); 
        
        await deleteDoc(doc.ref);    
        await deleteObject(fileRef ) 
        console.log('File deleted:', doc.id);
      });

      await Promise.all(deleteFile);
      
      console.log('All files deleted successfully');
      console.log('img delete');
    } catch (error) {
      console.log('Error deleting file:', error);
    }
  };