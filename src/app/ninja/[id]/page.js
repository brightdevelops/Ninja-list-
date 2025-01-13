// import { getStaticPaths } from "next/dist/build/templates/pages";
import path from "path";
import Ninja from "../page";

// app/ninja/[id]/page.js

// Fetch user details by ID
async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  return res.json();
}

// Generate static paths
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return users.map((user) => ({
    id: user.id.toString(),
  }));
}

// Page Component
export default async function Details({ params }) {
  const user = await getUser(params.id);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>
  );
}
