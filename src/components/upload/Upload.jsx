import React, { useState } from 'react'
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { doc, collection,addDoc,updateDoc} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db} from '../../firebase';


export const Upload = () => {

   const [file, setFile] = useState();



   const auth = getAuth();
   const user = auth.currentUser;

   const addImageToUser = async () => {
      // Creează o referință către subcolecția "images" a utilizatorului curent
      const imagesRef = collection(db, "users", user.uid, "images");

      // Adaugă un nou document în subcolecția "images" cu informații despre imaginea încărcată
      const docRef = await addDoc(imagesRef, {
         filename: file.name,
         url: "",
         createdAt: new Date(),
      });

      // Încarcă fișierul în Firebase Storage
      const fileRef= ref(storage, `images/${user.uid}/${docRef.id}`);
      const snapshot = await uploadBytes(fileRef, file);

      // Actualizează URL-ul de descărcare al imaginii în documentul din subcolecția "images"
      const downloadUrl = await getDownloadURL(fileRef);
      await updateDoc(doc(db, "users", user.uid, "images", docRef.id), {
        url: downloadUrl,
      });
   };
   return (
      <div>
         <label htmlFor='asideLabel' className='aside__up btn-block'><span className='icon-cloud-upload'></span>Upload File</label>
         <input onChange={(e) => setFile(e.target.files[0])} type="file" id="asideLabel" className='aside__inp' />
         {/* {file} */}
         <button onClick={addImageToUser}>loade</button>
      </div>

   )
}
