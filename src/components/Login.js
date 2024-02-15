import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInform, setIsSignInform] = useState(true);

  const toggleSignIn = () => {
    setIsSignInform(!isSignInform);
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

      <form className="absolute p-14  w-3/12 my-40 mx-auto right-0 left-0 text-white font-sans bg-black rounded-sm opacity-80">
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
          type="text"
          placeholder="Email or phone number"
          className="p-3 my-4 w-full bg-[#3f3f46] rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4  w-full bg-[#3f3f46] rounded-sm"
        />
        {!isSignInform && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 my-4  w-full bg-[#3f3f46] rounded-sm"
          />
        )}
        <button className="p-3 my-8 w-full bg-red-700  text-white rounded-sm">
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
