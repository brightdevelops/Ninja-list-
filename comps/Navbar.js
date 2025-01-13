// "use client";

import Link from "next/link";
import image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/logo.png" width={128} height={77} />
      </div>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>

      <Link href="/about" legacyBehavior>
        <a> About</a>
      </Link>

      <Link href="/ninja" legacyBehavior>
        <a> Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
