"use client";

import AuthForm from "../AuthForm";

const Signup = () => {
  return (
    <main>
      <h2 className="text-center">Sign up</h2>
      <AuthForm typeHandle="signUp" />
    </main>
  );
};

export default Signup;
