"use client";

import AuthForm from "../AuthForm";

const Login = () => {
  return (
    <main>
      <h2 className="text-center">Log in</h2>
      <AuthForm typeHandle="signInWithPassword" />
    </main>
  );
};

export default Login;
