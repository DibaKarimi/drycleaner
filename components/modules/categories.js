import styles from "./Categories.module.css";

import React from 'react'
import Link from "next/link";

function Categories() {
    return (
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/services">DRY CLEANERS</Link>
          <Link href="/services">LAUNDRY</Link>
          <Link href="/services">TAILORING</Link>
        </div>
      </div>
    );
}

export default Categories;