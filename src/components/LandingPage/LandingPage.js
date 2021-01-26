import React, { useState, useEffect } from "react";
import * as QueryString from "query-string";
import Filters from "../Filters/Filters";
import { getPrograms } from "../../api/programs";
import Cards from "../Cards/Cards";
import "./landingPage.scss";

const LandingPage = (props) => {
  const filterParams = QueryString.parse(props.location.search);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ hasErrored: false, message: "" });
  const [programs, setPrograms] = useState([]);
  const [year, setYear] = useState(filterParams.year || null);
  const [launchVal, setLaunchVal] = useState(filterParams.launchVal || null);
  const [landingVal, setLandingVal] = useState(filterParams.landingVal || null);

  useEffect(() => {
    filterParams.year && setYear(filterParams.year);
    filterParams.launchVal != null && setLaunchVal(filterParams.launchVal);
    filterParams.landingVal != null && setLandingVal(filterParams.landingVal);
  }, [filterParams]);

  useEffect(() => {
    setLoading(true);
    setError({});
    getPrograms(year, launchVal, landingVal)
      .then((items) => {
        console.log("items", items);
        setPrograms(items);
        setLoading(false);
      })
      .catch((err) => {
        setError({
          hasErrored: true,
          message:
            err.message || "An error has occurred. Please try after some time.",
        });
        setLoading(false);
      });
  }, [year, launchVal, landingVal]);

  return (
    <div>
      <header className="main-title">SpaceX Launch Programs</header>

      <div className="content-wrapper">
        <Filters
          year={year}
          setYear={setYear}
          launchVal={launchVal}
          setLaunchVal={setLaunchVal}
          landingVal={landingVal}
          setLandingVal={setLandingVal}
        />
        {loading ? (
          <div className="loader"></div>
        ) : programs.length ? (
          <div className="program-list">
            {programs.map((program) => (
              <Cards key={program.launch_date_unix} program={program} />
            ))}
          </div>
        ) : error.hasErrored ? (
          <div className="error-text">{error.message}</div>
        ) : (
          <div className="error-text">
            OOPS! No Data Found. Please try any other filter(s).
          </div>
        )}
      </div>
      <footer>Developed By: Siddharth Yadav</footer>
    </div>
  );
};

export default LandingPage;
