"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { setTimeout } from "timers/promises";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 300);
  }, []);
  // const router = useRouter()

  return (
    <div className="not-found">
      <h1>Oooooops...</h1>
      <h2>This page was not found</h2>
      <p>
        Go back to the homepage <br />
        <Link href="/">Home</Link>
      </p>
    </div>
  );
}
