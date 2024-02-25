import styles from "./HomePage.module.css"
import Banner from "../modules/Banner";
import Categories from "../modules/categories";

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Categories/>
    </div>
  );
}

export default HomePage