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
                <h3 className="text-sky-500">Senior Data Engineer</h3>
                <span className="text-white">LTIMindtree, New Delhi</span>
                <p className="text-white mb-3">
                  <em>June 2022 - Present</em>
                </p>
                <p className="text-gray-400 text-justify">
                  Develop, optimize and automate ETL processes within the E-Verification domain to transform raw taxpayer data into a structured format, improving data quality and accessibility which increases the scalability of data pipelines, reducing manual intervention and minimizing potential errors. Conducted Taxpayer Segmentation by aggregating and processing diverse sources of income tax data from multiple channels using Teradata. This Segmentation Procedure also required collaboration with data experts to define segmentation criteria, enhancing tax compliance efforts and revenue collection. Tech Stack: Python, SQL, Teradata, PySpark, Docker and AWS.
                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Data Engineer Intern</h3>
                <span className="text-white">Highradius Corporation, Hyderabad</span>
                <p className="text-white mb-3">
                  <em>August 2021 - March 2022</em>
                </p>
                <p className="text-justify text-gray-400">
                  Revamped SQL queries to utilize optimized indexing, reducing query time from over 3 minutes to seconds thereby enabling parallel query execution, resulting in 2x improvement in query performance. Optimized the stored procedures, functions and ad-hoc SQL queries pertaining to EIPP Product to resolve transaction conflicts resulting in 25% increase in performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
