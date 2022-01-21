import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <header className="bg-white text-black shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex flex-col md:w-1/5 title-font font-medium items-start md:justify-start content-start mb-4 md:mb-0">
            <span className="text-xl">Kenny Fowler</span>
            <span className="text-accent-blue">
              Software Engineering Technician
            </span>
          </a>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
          <Link href="/blog">
            <a className="mx-5 cursor-pointer uppercase hover:text-accent-blue">
              Blog
            </a>
          </Link>
          <Link href="/about">
            <a className="mx-5 cursor-pointer uppercase hover:text-accent-blue">
              About
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
