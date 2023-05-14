import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth  } from "firebase/auth";

import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";


export const regUser = async (data) => {
    const {email, password} = data


    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      //create user on firestore
      await setDoc(doc(db, "users", res.user.uid));

    } catch (error) {
        console.log(error)
    }

}


export const logIn = async (data) => {
  const {username, password} = data
    const auth = getAuth();
    try {
        return  await signInWithEmailAndPassword(auth, username, password)
    } catch (error) {
        console.log(error.code)
       
    }
  
}