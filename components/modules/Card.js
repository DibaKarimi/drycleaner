import styles from "./Card.module.css";

function Card(props) {
  const { id, name,introduction, price, details, discount, image } = props;

  return (
    <div className={styles.container}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{introduction}</h4>
      <div className={styles.details}>
        {details.map((item) => (
          <h5>{item}</h5>
        ))}
      </div>
    </div>
  );
}

export default Card;
