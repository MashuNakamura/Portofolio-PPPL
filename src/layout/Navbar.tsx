export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">Portofolio</h1>
      <ul className="flex space-x-5">
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
