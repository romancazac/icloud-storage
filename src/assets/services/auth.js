import { createUserWithEmailAndPassword,getAuth, updateProfile,signInWithEmailAndPassword  } from "firebase/auth";



export const regUser = async (data) => {
    const {email, password} = data

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
    console.log(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
    });

}
// const handleForm = async (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     const displayName = e.target[0].value;
//     const email = e.target[1].value;
//     const password = e.target[2].value;
//     const file = e.target[3].files[0];

//     try {
//       //Create user
//       const res = await createUserWithEmailAndPassword(auth, email, password);

//       //Create a unique image name
//       const date = new Date().getTime();
//       const storageRef = ref(storage, `${displayName + date}`);

//       await uploadBytesResumable(storageRef, file).then(() => {
//         getDownloadURL(storageRef).then(async (downloadURL) => {
//           try {
//             //Update profile
//             await updateProfile(res.user, {
//               displayName,
//               photoURL: downloadURL,
//             });
//             //create user on firestore
//             await setDoc(doc(db, "users", res.user.uid), {
//               uid: res.user.uid,
//               displayName,
//               email,
//               photoURL: downloadURL,
//             });

//             //create empty user chats on firestore
//             await setDoc(doc(db, "userChats", res.user.uid), {});
            
           
//           } catch (err) {
//             console.log(err);
//             setErr(true);
//             setLoading(false);
//           }
//         });
        
//       });
//     } catch (err) {
//       setErr(true);
//       setLoading(false);
//     }
//     navigate('/tickets');
//  };
export const logIn = async (data) => {
  const {username, password} = data

    const auth = getAuth();

    try {
        return  await signInWithEmailAndPassword(auth, username, password)
    } catch (error) {
        console.log(error.code)
       
    }
  
}