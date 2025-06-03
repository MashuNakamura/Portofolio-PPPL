import Hamburger from "hamburger-react";
import { useState } from "react";

export default function HamburgerComponents() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setIsOpen} />

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-slate-900 dark:text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex justify-end p-4">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </header>
        <nav className="mt-4 px-4">
          <ul>
            <li className="py-2">
              <a href="/home">Home</a>
            </li>
            <li className="py-2">
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
