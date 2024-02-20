import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, USER_LOGO } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/searchSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleSearch = () => {
    dispatch(toggleGPTSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // User is signed in or signed up
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-20 w-screen flex justify-between items-center">
      <img className="w-32 sm:w-48" src={LOGO} alt="app-logo" />
      {user && (
        <div className="flex items-center space-x-4 mr-5">
          <button
            onClick={handleSearch}
            className="flex items-center text-white bg-gray-800 rounded-md opacity-80 px-4 py-2  font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            Search
          </button>
          <img className="w-12 h-12" src={USER_LOGO} alt="sanket" />
          <button onClick={handleSignOut} className="p-2 font-bold text-white ">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
