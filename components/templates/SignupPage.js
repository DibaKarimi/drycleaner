import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./SigninPage.module.css";
//import { useSession } from "next-auth/react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  const router = useRouter();
  // const { status } = useSession();

  //  useEffect(() => {
  //    if (status === "authenticated") router.push("/");
  //  }, [status]);

  const signUpHandler = async () => {
    const res = await fetch("/api/auth/signup ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email,telephone, password }),
    });
    const data = await res.json();

    if (data.status === "success") router.push("/services");
  };
  return (
    <div className={styles.signin}>
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
        <p>Have an account? </p>
        <Link href="/signin"> Sign in</Link>
      </div>
    </div>
  );
}
export default SignupPage;
