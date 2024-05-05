import { useRef, useState } from "react";
import Header from "./Header";
import { Authantication } from "../utils/Authantication";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSign = () => {
    const authLatestMessage = Authantication(
      email.current.value,
      password.current.value
    );

    seterrorMessage(authLatestMessage);
    if (authLatestMessage) return;

    if (!isLogin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(userCredential => {
          // Signed up
          const user = userCredential.user;
        })
        .catch(error => {
          const errorCode = error.code;
          const errMessage = error.message;
          seterrorMessage(errMessage);
          // ..
        });
    } else {
      // Singhin Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;
        })
        .catch(error => {
          const errorCode = error.code;
          const errMessage = error.message;
          seterrorMessage(errMessage);
        });
    }
  };

  const handleIsLogin = () => {
    setIsLogin(!isLogin);
    seterrorMessage(null);
  };

  return (
    <div>
      <Header />
      <form
        className="flex flex-col w-80 bg-[#000000cc] rounded-lg p-8
                text-white p-4 absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%]"
        onSubmit={e => e.preventDefault()}
      >
        <h1 className=" mb-6 font-bold text-4xl">
          {isLogin ? "Sign in" : "Sign up"}
        </h1>
        {!isLogin && (
          <input
            type="text"
            className="mb-6 p-3 rounded-md bg-[#302f2f] "
            placeholder="Enter your Full Name"
          />
        )}
        <input
          ref={email}
          type="text"
          className="mb-6 p-3 rounded-md bg-[#302f2f] "
          placeholder="Enter your Email"
        />
        <input
          ref={password}
          type="password"
          className="mb-6 p-3 rounded-md bg-[#302f2f] "
          placeholder="Enter your Password"
        />
        {errorMessage !== null && (
          <p className="text-red-600 py-2">{errorMessage}</p>
        )}
        <button
          onClick={() => handleSign()}
          className="mb-6 bg-[#E50914] py-2 rounded-md"
        >
          {isLogin ? "Sign in" : "Sign up"}
        </button>
        <p>
          {!isLogin ? "Allready Have an account?" : "New to Netflix?"}{" "}
          <span className="cursor-pointer" onClick={() => handleIsLogin()}>
            {isLogin ? "Sign up" : "Sign in"} now.
          </span>
        </p>
      </form>
      <div className="relative">
        <img
          alt=""
          className="h-[100vh] w-[100vw] object-cover"
          aria-hidden="true"
          data-uia="nmhp-card-hero+background+image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#000000cc] from-0% via-[#00000000] via-60% to-[#000000cc] to-100% "></div>
      </div>
    </div>
  );
};

export default Login;
