import profileImg from "./assets/Rajat.jpg";
export default function About() {
  return (
    <>
      <div
        id="about-section"
        className="about-section-container flex gap-5 justify-between py-20 bg-slate-900"
        style={{ zIndex: 100, position: "relative" }}
      >
        <div className="text-start">
          <p
            className="greetings text-white font-bold text-3xl"
            style={{ margin: "1rem 5rem" }}
          >
            Hi, I'm Rajat Pandey <span className="wave">👋🏻</span>
          </p>
          <p
            className="introduction-para text-white"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Based in New Delhi, I'm a dedicated
            <span className="text-sky-500"> Java Developer</span> holding a
            <span className="text-sky-500">
              {" "}
              B.Tech degree in Electrical Engineering.
            </span>{" "}
            My professional journey revolves with a passion for crafting efficient, scalable, and maintable software solutions. With over years of experience, I thrive in collabrative environments and always eager to explore new technologies and enhance my craft.
          </p>
          <p
            className="text-white introduction-para"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Proficient in{" "}
            <span className="text-sky-500">
              Java, SQL, Spring Boot, Hibernate, J2EE, Microservices and Kafka.{" "}
            </span>
            Beyond coding, I view web application development as an endless canvas for innovation, and
            I aspire to align with evolving technology trends.
            <span className="text-sky-500">
              {" "}
              I hold certifications in emerging technologies{" "}
            </span>
            and actively participate in workshops to stay ahead of industry trends.
          </p>
        </div>
        <img
          src={profileImg}
          alt="rajat-img"
          className="text-white img-rajat"
          style={{
            margin: "0rem 5rem 1rem 1rem",
            borderRadius: "50%",
            width: "90%",
            height: "20rem",
            position: "relative",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
}
