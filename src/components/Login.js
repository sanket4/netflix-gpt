import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInform, setIsSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setErrorMessage(null);
    setIsSignInform(!isSignInform);
  };

  const handleSignIn = () => {
    setErrorMessage(null);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-14  w-3/12 my-40 mx-auto right-0 left-0 text-white font-sans bg-black rounded-sm opacity-80"
      >
        <h1 className=" font-medium text-3xl pt-4 pb-3">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInform && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 my-4 w-full bg-[#3f3f46] rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-3 my-4 w-full bg-[#3f3f46] rounded-sm"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4  w-full bg-[#3f3f46] rounded-sm"
        />

        <p className="text-red-600 text-lg font-semibold   ">{errorMessage}</p>
        <button
          className="p-3 my-8 w-full bg-red-700  text-white rounded-sm"
          onClick={handleSignIn}
        >
          {isSignInform ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-gray-500">
          {isSignInform ? "New to Netflix?" : "Already an User?"}
          <span
            className="text-white cursor-pointer m-3"
            onClick={toggleSignIn}
          >
            {isSignInform ? "Sign up now." : "Sign In."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
