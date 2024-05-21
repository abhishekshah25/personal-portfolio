import Particle from "./Particle";
export default function Home() {
  return (
    <>
      <Particle />
      <div
        className="home flex flex-col items-center justify-center gap-4 h-screen align-center"
      >
        <p className="name font-medium text-white text-8xl content-center">
          Rajat <span className="text-sky-500">Pandey</span>
        </p>
        <p className="title text-white text-2xl">
          Java Developer & Software Engineer
        </p>
        <p className="socials text-white text-3xl flex gap-x-6 mt-2">
          <a href="mailto:rajatpandey9758@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope text-white"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1xls_rj5NI_2zdJg6rlDoTQY0YxLIhE-K/view?usp=drivesdk"
            target="_blank"
          >
            <i className="fa-solid fa-file-lines text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/rajat-pandey-rp/" target="_blank">
            <i className="fa-brands fa-linkedin text-white"></i>
          </a>

          <a href="https://github.com/Rajatpandey186" target="_blank">
            <i className="fa-brands fa-github text-white"></i>
          </a>
          <a href="https://twitter.com/rajat__pandey23" target="_blank">
            <i className="fa-brands fa-twitter text-white"></i>
          </a>
        </p>
      </div>
    </>
  );
}
