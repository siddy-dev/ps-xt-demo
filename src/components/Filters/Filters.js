/* eslint-disable eqeqeq */
import React from "react";
import qs from "query-string";
import { withRouter } from "react-router-dom";
import "./filters.scss";

const _getYear = () => {
  const INITIAL_YEAR = 2006;
  const CURRENT_YEAR = new Date().getFullYear();
  const years = [];
  for (let i = INITIAL_YEAR; i <= CURRENT_YEAR; i++) years.push(i);
  return years;
};

const Filters = (props) => {
  const { year, launchVal, landingVal } = props;
  const years = _getYear();
  const queryParams = qs.parse(props.location.search);
  const newQueries = { ...queryParams };

  const setFilterInRoute = (newQueries) => {
    props.history.push({ search: qs.stringify(newQueries) });
  };

  const handleYearClick = (selectedYear) => {
    if (selectedYear == year) {
      props.setYear(null);
      delete newQueries.year;
    } else {
      newQueries.year = selectedYear;
    }
    setFilterInRoute(newQueries);
  };

  const handleLaunchClick = (val) => {
    if (String(val) == launchVal) {
      props.setLaunchVal(null);
      delete newQueries.launchVal;
    } else {
      newQueries.launchVal = val;
    }
    setFilterInRoute(newQueries);
  };

  const handleLandingClick = (val) => {
    if (String(val) == landingVal) {
      props.setLandingVal(null);
      delete newQueries.landingVal;
    } else {
      newQueries.landingVal = val;
    }
    setFilterInRoute(newQueries);
  };

  return (
    <div className="filter-wrapper">
      <div className="filter-heading">Filters</div>
      <div>
        <div className="align-center">Launch Year</div>
        <hr style={{ width: "80%" }} />
        <div className="year-content">
          {years.map((yearVal) => (
            <button
              key={yearVal}
              className={`filter-button ${
                yearVal == year ? "selected-filter" : ""
              }`}
              onClick={() => handleYearClick(yearVal)}
            >
              {yearVal}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="align-center">Successful Launch</div>
        <hr style={{ width: "80%" }} />
        <button
          className={`filter-button ${
            launchVal == true || launchVal == "true" ? "selected-filter" : ""
          }`}
          onClick={() => handleLaunchClick(true)}
        >
          True
        </button>
        <button
          className={`filter-button ${
            launchVal == false || launchVal == "false" ? "selected-filter" : ""
          }`}
          onClick={() => handleLaunchClick(false)}
        >
          False
        </button>
      </div>
      <div>
        <div className="align-center">Successful Landing</div>
        <hr style={{ width: "80%" }} />
        <button
          className={`filter-button ${
            landingVal == true || landingVal == "true" ? "selected-filter" : ""
          }`}
          onClick={() => handleLandingClick(true)}
        >
          True
        </button>
        <button
          className={`filter-button ${
            landingVal == false || landingVal == "false"
              ? "selected-filter"
              : ""
          }`}
          onClick={() => handleLandingClick(false)}
        >
          False
        </button>
      </div>
    </div>
  );
};
export default withRouter(Filters);
