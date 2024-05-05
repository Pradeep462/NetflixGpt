import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSclice";
import { updatePgtState } from "../utils/gptSlice";

const Header = () => {
  const navigater = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  const handleSignOur = () => {
    signOut(auth)
      .then(() => {
        navigater("/");
      })
      .catch(error => {
        navigater("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uui: uid, email: email }));
        navigater("/browse");
      } else {
        dispatch(removeUser());
        navigater("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="flex justify-between w-full absolute z-10 px-8 py-4">
      <img
        className="w-40 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div>
          <button
            className="bg-blue-600 rounded-lg text-white py-2 px-6 mr-4"
            onClick={() => dispatch(updatePgtState())}
          >
            GPT Search
          </button>
          <button
            className="text-red-600 font-bold my-4"
            onClick={() => handleSignOur()}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
