export default function About() {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div>
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg max-w-2xl text-center mb-4">
          Hello! I'm Federico Matthew Pratama, a web developer with a strong
          interest in crafting responsive, user-friendly websites and
          applications. My journey in tech started with curiosity and has grown
          into a passion for clean code and modern UI/UX design.
        </p>
        <p className="text-lg max-w-2xl text-center mb-4">
          I specialize in frontend technologies like React, Tailwind CSS, and
          TypeScript, and I also enjoy working on backend logic with Go. I'm
          always open to learning new stacks and collaborating with others to
          solve real-world problems through code.
        </p>
        <p className="text-lg max-w-2xl text-center">
          Outside of coding, I enjoy gaming, listening to music, and chilling at
          home. Nice to meet you!
        </p>
      </div>
      <div className="p-6">
        <p className="text-xl mb-3">Made with:</p>
        <ul className="flex gap-x-4">
          <li className="bg-blue-500 text-white rounded-lg px-4 py-2 shadow hover:bg-blue-600 transition">
            React
          </li>
          <li className="bg-indigo-500 text-white rounded-lg px-4 py-2 shadow hover:bg-indigo-600 transition">
            TypeScript
          </li>
          <li className="bg-purple-500 text-white rounded-lg px-4 py-2 shadow hover:bg-purple-600 transition">
            Vite
          </li>
        </ul>
      </div>
    </div>
  );
}
