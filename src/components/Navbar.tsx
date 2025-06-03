import Hamburger from "./Hamburger";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold ml-5 hover:text-blue-500">
        <a href="/home">Portofolio</a>
      </h1>

      <div className="block sm:hidden text-2xl">
        <Hamburger />
      </div>

      <ul className="hidden sm:flex space-x-6 mr-5 text-xl">
        <li>
          <a className="text-white hover:text-blue-500" href="/home">
            Home
          </a>
        </li>
        <li>
          <a className="text-white hover:text-blue-500" href="/about">
            About
          </a>
        </li>
      </ul>
    </header>
  );
}
