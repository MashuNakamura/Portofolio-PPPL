import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="font-poppins flex flex-col md:flex-row items-center justify-center gap-8 p-8">
      <img
        src="/halo.jpg"
        alt="Photo of Federico Matthew Pratama"
        className="w-48 md:w-60 rounded-2xl shadow-md"
      />
      <div className="flex flex-col text-left">
        <div className="font-bold text-2xl">
          <p>Hello There 👋</p>
          <TypeAnimation
            sequence={[
              "I'm Federico Matthew Pratama",
              2000,
              "I'm a Data Analyst",
              2000,
              "I'm a Web Developer",
              2000,
            ]}
            wrapper="span"
            speed={25}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <p className="mt-4 text-gray-600 max-w-md">
          I’m passionate about turning ideas into impactful digital experiences.
          Whether it’s analyzing data or building responsive web apps, I love
          solving real-world problems through tech.
        </p>
        <p className="text-xl mt-10 text-center">Stay connect with me</p>
        <div className="flex justify-center">
          <ul className="flex flex-col md:flex-row gap-x-4 mt-9 gap-y-4">
            <a href="https://github.com/MashuNakamura">
              <div className="flex gap-3 bg-gray-700 text-white rounded-lg px-4 py-2 shadow hover:bg-gray-800 transition">
                <img src="github.png" alt="GitHub" className="w-6 h-6" />
                <li>Github</li>
              </div>
            </a>
            <a href="https://www.instagram.com/federico.matthew01/">
              <div className="flex gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg px-4 py-2 shadow hover:from-purple-600 hover:to-pink-600 transition">
                <img src="instagram.png" alt="Instagram" className="w-6 h-6" />
                <li>Instagram</li>
              </div>
            </a>
            <a href="https://discord.com/users/mashu23">
              <div className="flex gap-3 bg-indigo-600 text-white rounded-lg px-4 py-2 shadow hover:bg-indigo-700 transition">
                <img src="discord.png" alt="Discord" className="w-6 h-6" />
                <li>Discord</li>
              </div>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
