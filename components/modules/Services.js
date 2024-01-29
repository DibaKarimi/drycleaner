import styles from "./Services.module.css";

import React from 'react'
import Link from "next/link";

function Services() {
    return (
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/menu">DRY CLEANERS</Link>
          <Link href="/menu">LAUNDRY</Link>
          <Link href="/menu">TAILORING</Link>
        </div>
      </div>
    );
}

export default Services