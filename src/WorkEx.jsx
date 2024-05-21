export default function WorkEx() {
  return (
    <div>
      <div
        id="workex-container"
        className="workex-container bg-slate-900 pt-20 pb-12"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-white text-center text-3xl font-bold my-6">
          Work Experience
        </h3>
        <div className="timeline mt-6">
          <div className="timeline-container">
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Java Developer</h3>
                <span className="text-white">LTIMindtree, New Delhi</span>
                <p className="text-white mb-3">
                  <em>July 2023 - Present</em>
                </p>
                <p className="text-gray-400 text-justify">
                  Led the development and deployment of a transformative project insight lens for the Income Tax Department.
                  This innovative tool meticulously filters and maps taxpayer data, utilizing state-of-the-art algorithms to provide
                  precise insights. Its implementation has significantly enhanced the department’s ability to detect and address tax
                  evasion, leading to more effective tax compliance measures.
                  Revolutionizing data analysis capabilities. Designed to meticulously filter and map taxpayer data, this advanced
                  tool utilizes state-of-the-art algorithms to provide precise insights.
                  Reduced the 70 percent manual time to detect to get the filtration done on tax payee data, which got appreciated by Income Tax Department of India.
                  A project implementation worked on tools like Java, Spring Boot, Hibernate, ReactJs, Microservices architecture, MySQL, Postgres, Teradata, J2EE.
                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">System Engineer</h3>
                <span className="text-white">Tata Consultancy Services, Bengaluru</span>
                <p className="text-white mb-3">
                  <em>April 2021 - May 2023</em>
                </p>
                <p className="text-justify text-gray-400">
                  American Labor Union Project, which deals up with the integration of Spring MVC,   Spring Boot, Hibernate and
                  Java tools to build up the complete modulation and integral operational running of labor management.
                  Built and maintained the database schema, optimizing data storage and retrieval. Implemented robust authenti-
                  cation and authorization mechanisms to ensure data security
                  Worked as backend developer on various modules consisting of monolithic and microservices architecture where in
                  created backend flow with all the business logic of rules and guidelines.
                  Implemented role-based access control (RBAC) to define and manage user permissions and restrictions based on
                  job roles and responsibilities using the concept of Spring Security.
                  Worked on Java Collections API for handling the data objects between business layers and front end.Developed
                  over 100+ modules including master modules. Performed client side server-side validations.
                  Deployed application on APACHE tomcat server. Resolved many errors and critical bugs in the products to
                  improve performance and maintain seamless experience of the application.
                  With integration with testing team, resolved couple of p0 bugs and always adhered the customer SLA which saved huge amount of development time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
