import styles from "./CarList.module.css";
import { useRouter } from "next/router";
import Back from "../icons/Back";
import Card from "../module/Card";

function CarList({ data }) {
  const router = useRouter();

  const clickHandler = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={clickHandler}>
        <Back />
        <p>Go Back</p>
      </div>

      <div className={styles.cards}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CarList;
