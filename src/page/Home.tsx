import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="font-poppins flex flex-col items-center justify-center">
      <img
        src="../../public/halo.jpg"
        alt="Halo"
        className="w-50 mb-4 rounded-2xl shadow-md"
      />
      <div className="font-bold text-2xl text-center">
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
      <p className="mt-4 text-center text-gray-600 max-w-md">
        I’m passionate about turning ideas into impactful digital experiences.
        Whether it’s analyzing data or building responsive web apps, I love
        solving real-world problems through tech.
      </p>
    </div>
  );
}
