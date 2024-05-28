import Particle from "./Particle";
export default function Home() {
  return (
    <>
      <Particle />
      <div
        className="home flex flex-col items-center justify-center gap-4 h-screen align-center"
      >
        <p className="name font-medium text-white text-8xl content-center">
          Abhishek <span className="text-sky-500">Shah</span>
        </p>
        <p className="title text-white text-2xl">
          Software Developer & Data Engineer
        </p>
        <p className="socials text-white text-3xl flex gap-x-6 mt-2">
          <a href="mailto:abhishekshah137@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope text-white"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1nAyQ2ps7UmxFjHHU-zG6XCkz6MTFZARg/view"
            target="_blank"
          >
            <i className="fa-solid fa-file-lines text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/abhishek-shah-10/" target="_blank">
            <i className="fa-brands fa-linkedin text-white"></i>
          </a>

          <a href="https://github.com/abhishekshah25" target="_blank">
            <i className="fa-brands fa-github text-white"></i>
          </a>
          <a href="https://twitter.com/abhishk_twts" target="_blank">
            <i className="fa-brands fa-twitter text-white"></i>
          </a>
        </p>
      </div>
    </>
  );
}
