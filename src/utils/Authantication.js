export const Authantication = (email, password) => {
  const isEmailValid = /^\S+@\S+\.\S+$/.test(email);

  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (!isEmailValid) return "Email is Not valid";
  if (!isPasswordValid) return "Password is Not valid";
  return null;
};
