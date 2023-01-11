import React, { FormEvent } from "react";
import { useAppDispath } from "../hooks/useTypedHooks";
import { loginUser } from "../store/slices/auth";

const Login = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const dispatch = useAppDispath();

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser({email,password}))
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <input value={email} onChange={emailHandler} type="email" />
        <input value={password} onChange={passwordHandler} type="password" />
        <button>sign in</button>
      </form>
    </div>
  );
};

export default Login;
