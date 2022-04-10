import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.int";

const EmailSignIn = () => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      // Signed in
      const user = result.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
export default EmailSignIn;
