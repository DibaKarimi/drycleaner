import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./SigninPage.module.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { data, status } = useSession();
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") router.replace("/services");
  }, [status]);

  const loginHandler = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!res.error) router.replace("/services");
    if (res.error) {
      setErrorMessage(res.error);
    }
  };
  return (
    <div className={styles.signin}>
      <h3>Login Form</h3>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler}>Login</button>
      <span>{errorMessage}</span>
      <div className="m-4">
        <p>Don't have an account yet?? </p>
        <Link href="/signup"> Sign up</Link>
      </div>
    </div>
  );
}

export default SignIn;
