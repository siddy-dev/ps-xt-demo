import React from "react";
import "./cards.scss";
// import placeHolder from "../assests/GypSkayF_o.png";

const Cards = ({ program }) => {
  return (
    <div className="card">
      <div className="wrap-img">
        <img
          // src={program.links.mission_patch}
          // src={placeHolder}
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt="Avatar"
          style={{ width: "100%" }}
        />
      </div>
      <div className="card-body">
        <div
          className="card-title"
          title={`${program.mission_name} # ${program.flight_number}`}
        >
          {program.mission_name} # {program.flight_number}
        </div>
        <div>
          <span className="card-sub-heading">Mission Ids:</span>
          <ul>
            {program.mission_id.map((mission) => (
              <li key={mission}>
                <span className="li-card-text">{mission}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="card-sub-heading">Launch Year:</div>{" "}
          <span className="card-text">{program.launch_year}</span>
        </div>
        <div>
          <div className="card-sub-heading"> Successful Launch:</div>{" "}
          <span className="card-text capital-text">
            {program.launch_success.toString()}
          </span>
        </div>
        <div>
          <div className="card-sub-heading">Successful Landing:</div>{" "}
          <span className="card-text">{program.launch_landing}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
