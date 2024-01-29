import Link from "next/link"
import styles from "./Layout.module.css"

function Layout({children}) {
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

          <Link href="/login">LOGIN</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <div>Footer</div>
      </footer>
    </>
  );
}

export default Layout