import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("clicked");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-20 w-screen flex justify-between">
      <img
        className="w-32 sm:w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="app-logo"
      />
      {user && (
        <div className="flex p-4">
          <img
            className="w-12 h-12"
            src="https://occ-0-4344-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbkvkH9DYGUFVfqsK2bX1qFGEd2mNbSbJfUv5x3AdSAFCNXHgHF9IcjprV-SHKg3wEyaQIKWNOJECyv8hiUT6QiXfAYuiSc.png?r=fab"
            alt="sanket"
          />
          <button
            onClick={handleSignOut}
            className=" p-2 m-2  font-bold text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
