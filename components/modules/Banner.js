import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <img src="/images/dry-cleaning.jpeg" alt="homeImage"></img>
      </div>
    </div>
  );
}

export default Banner;
