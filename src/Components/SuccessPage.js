import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase.int";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        localStorage.setItem("user", JSON.stringify({}));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();

  return (
    <div className=" my-3 text-center">
      {user.photoURL && <img src={user.photoURL} alt="" />}

      <h1>
        Congrats
        <span className="fw-bold text-primary"> {user.displayName}</span>
      </h1>
      <h2 className="text-uppercase">you are logged in </h2>
      {user.email && (
        <h4>
          Your Email is
          <span className="fw-bold text-success">
            {" "}
            {user.emailVerified ? "Verified" : "Not Verified"}
          </span>
        </h4>
      )}
      {user.email && (
        <h4>
          Your Email is
          <span className="fw-bold text-success"> {user.email}</span>
        </h4>
      )}
      <h4>
        Your User ID is
        <span className="fw-bold text-success"> {user.uid}</span>
      </h4>
      <button
        onClick={signOutUser}
        className="btn bg-danger text-white mt-3 fw-bold"
      >
        Log Out
      </button>
    </div>
  );
};

export default SuccessPage;
