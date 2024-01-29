import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  const router = useRouter();

  const signUpHandler = async () => {
    const res = await fetch("/api/auth/signup ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email,telephone, password }),
    });
    const data = await res.json();
    console.log("data=========", data);
    if (data.status === "success") router.push("/signin");
  };
  return (
      
    <div className="signin-form">
      <h3>Registration Form</h3>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telephone Number"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signUpHandler}>Register</button>
      <div>
        <p>Have an account?</p>
        <Link  href="/signin">Sign in</Link>
      </div>
    </div>
  );
}
export default SignupPage;