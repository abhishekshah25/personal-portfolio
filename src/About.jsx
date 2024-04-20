import profileImg from "./assets/1000027331-01.jpg";
export default function About() {
  return (
    <>
      <div
        id="about-section"
        className="about-section-container flex items-start justify-start py-20 bg-slate-900"
        style={{ zIndex: 100, position: "relative" }}
      >
        <div className="text-start flex-grow">
          <p
            className="greetings text-white font-bold text-3xl"
            style={{ margin: "1rem 5rem", paddingTop: "5rem" }}
          >
            Hi, I'm Abhishek Shah <span className="wave">👋🏻</span>
          </p>
          <p
            className="introduction-para text-white"
            style={{ margin: "1rem 2rem 1rem 5rem", width: "80rem" }}
          >
            Based in New Delhi, I'm a results-oriented
            <span className="text-sky-500"> Data Engineer</span> holding a
            <span className="text-sky-500">
              {" "}
              B.Tech degree in Electrical & Electronics Engineering.
            </span>{" "}
            My professional journey revolves around transforming raw data into
            impactful insights, and I'm particularly passionate about building robust data solutions. I bring a wealth of experience and expertise in crafting data pipelines & architecting scalable systems.
          </p>
          <p
            className="text-white introduction-para"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Proficient in{" "}
            <span className="text-sky-500">
              Python, SQL, Spark, Amazon Web Services(AWS) and React.
            </span>
            Beyond coding, I view data as an infinite canvas for innovation, and
            my future is a thrilling horizon of AI possibilities. Committed to
            continuous improvement,
            <span className="text-sky-500">
              {" "}
              I hold certifications in emerging technologies{" "}
            </span>
            and actively participate in workshops to stay ahead of industry trends.
          </p>
        </div>
        {/* <img
          src={profileImg}
          alt="abhishek-shah-img"
          className="text-white img-abhishek"
          style={{
            borderRadius: "50%",
            width: "25 rem",
            height: "25rem",
            maxWidth: "100%",
            objectFit: "cover",
          }}
        /> */}
      </div>
    </>
  );
}
