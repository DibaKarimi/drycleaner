import styles from "./HomePage.module.css"
import Banner from "../modules/Banner";
import Services from "../modules/Services"

function HomePage() {
  return (
      <div className={styles.container}>  
      <Banner />
      <Services/>
    </div>
  )
}

export default HomePage