import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="font-poppins flex flex-row items-center justify-center gap-8 p-8">
      <img
        src="../../public/halo.jpg"
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
      </div>
    </div>
  );
}
