import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";

const ContinueWith = () => {
  return (
    <>
      <h1 className="my-4">Or,</h1>
      <div className="d-flex flex-column">
        <button className="mb-4 btn p-1 shadow d-flex justify-content-center align-items-center">
          <FcGoogle className="fs-1" />
          <span className="fs-5 fw-bold ms-2"> SignIn With Google</span>
        </button>
        <button className="mb-4 btn p-1 shadow d-flex justify-content-center align-items-center">
          <FaGithub className="fs-1" />
          <span className="fs-5 fw-bold ms-2"> SignIn With Github</span>
        </button>
        <button className="mb-4 btn p-1 shadow d-flex justify-content-center align-items-center">
          <FaFacebook className="text-primary fs-1" />
          <span className="fs-5 fw-bold ms-2"> SignIn With Google</span>
        </button>
      </div>
    </>
  );
};

export default ContinueWith;
