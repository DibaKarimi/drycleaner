import styles from "./ServicesPage.module.css";
import Card from "../modules/Card"

function Services({ data }) {
  return (
    <div className={styles.container}>
      <h2>Services</h2>
      <div className={styles.subContainer}>
        {data.map((service) => (
          <Card key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
