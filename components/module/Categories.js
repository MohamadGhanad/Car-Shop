import styles from "./Categories.module.css";
import Link from "next/link";
import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";

function Categories() {
  return (
    <div className={styles.container}>
      <Link href="/categories/sedan">
        <div>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>

      <Link href="/categories/hatchback">
        <div>
          <p>Hatchback</p>
          <Hatchback />
        </div>
      </Link>

      <Link href="/categories/sport">
        <div>
          <p>Sport</p>
          <Sport />
        </div>
      </Link>

      <Link href="/categories/suv">
        <div>
          <p>Suv</p>
          <Suv />
        </div>
      </Link>
    </div>
  );
}

export default Categories;
