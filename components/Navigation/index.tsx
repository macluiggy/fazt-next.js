import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/"}>
            <a>Index</a>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href={"/services"}>
            <a>services</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
