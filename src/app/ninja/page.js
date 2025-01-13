import head from "next/head";
import style from "../Ninjas.module.css";
import Link from "next/link";

export default async function Ninja() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  return (
    <>
      <title>Ninja Listing | Ninja List</title>
      <h1>All Ninjas</h1>
      {data.map((user) => (
        <Link href={`/ninja/${user.id}`} legacyBehavior key={user.id}>
          <a className={style.single}>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
}
