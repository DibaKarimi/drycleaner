import Link from "next/link";
import styles from "./Layout.module.css";
import { signOut, useSession } from "next-auth/react";

function Layout({ children }) {
  const { status } = useSession();
  const logOutHandler = () => {
    signOut();
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">LOGO DRY CLEANER</Link>
        </div>
        <div className={styles.right}>
          <Link href="/">HOME</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/aboutus">ABOUT US</Link>
          {status === "authenticated" ? (
            <a className={styles.logout} onClick={logOutHandler}>
              {" "}
              Log out
            </a>
          ) : null}
          {status === "unauthenticated" ? (
            <Link href="/signin">Log in</Link>
          ) : null}
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <div></div>
      </footer>
    </>
  );
}

export default Layout;
