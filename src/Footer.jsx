export default function Footer() {
  return (
    <div>
      <div
        className="footer bg-slate-900 py-5 mx-auto"
        style={{ zIndex: 100, position: "relative" }}
      >
        <p className="footer-tagline text-white font-medium text-center">
          Connect with me
        </p>

        <ul className="socials-container flex gap-x-4 justify-center my-3">
          <li>
            <a href="mailto:abhishekshah137@gmail.com" target="_blank">
              <i className="fa-solid fa-envelope socials-icon text-white"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/abhishekshah25" target="_blank">
              <i className="fa-brands fa-github socials-icon  text-white"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abhishek-shah-10/" target="_blank">
              <i className="fa-brands fa-linkedin socials-icon  text-white"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/abhishk_twts" target="_blank">
              <i className="fa-brands fa-twitter socials-icon  text-white"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/your_ted_mosby/" target="_blank">
              <i className="fa-brands fa-instagram socials-icon  text-white"></i>
            </a>
          </li>
        </ul>
        <hr className="horizontal-line"></hr>
        <p className="copyright text-gray-400 text-center text-xs mt-4 mb-2">
          Copyright &copy; 2024 Abhishek Shah
        </p>
      </div>
    </div>
  );
}
