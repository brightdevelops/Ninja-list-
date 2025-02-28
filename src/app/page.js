import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../comps/Navbar";
import Footer from "../../comps/Footer";
import Link from "next/link";
import head from "next/head";

export default function Home() {
  return (
    <>
      <title>Nija List | Home</title>
      <div>
        <h1 className={styles.title}>Homeage</h1>
        <p className={styles.text}>Somethings in here </p>
        <p className={styles.text}>Somethings in here </p>
        <p className={styles.text}>Desmond is a geek  </p>
        <Link href="/ninja" legacyBehavior>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
