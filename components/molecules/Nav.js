import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="space-y-1 text-xl text-right font-fira cursor-ff1">
        <li>
          <Link href="/" passHref>
            <a className="cursor-ff1">C:\home</a>
          </Link>
        </li>
        <li className="relative">
          C:\about
          <span className="absolute top-0 right-0 px-1 -mr-8 text-xs text-white bg-black rounded-sm">
            SOON!
          </span>
        </li>
        <li>
          <Link href="https://calendly.com/debatz/reunion-30-minutos" passHref>
            <a className="cursor-ff1">E:\contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
