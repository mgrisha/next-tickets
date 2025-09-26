"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AuthForm = ({ typeHandle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const objectAuthSupabase = {
      email,
      password,
    };
    if (typeHandle === "signUp") {
      objectAuthSupabase.options = {
        emailRedirectTo: `${window.location.origin}/api/auth/callback`,
      };
    }
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth[typeHandle](objectAuthSupabase);

    if (error) {
      setError(error.message);
    }

    if (!error) {
      const tempUrl = typeHandle === "signUp" ? "/verify" : "/";
      router.push(tempUrl);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </label>
        <button className="btn-primary">Submit</button>
      </form>
      {error && <div className="error">{error}</div>}
    </>
  );
};

export default AuthForm;
