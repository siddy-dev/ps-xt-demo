import axios from "axios";

export function getPrograms(year, launchVal, landingVal) {
  let url = "https://api.spaceXdata.com/v3/launches?limit=100";
  year !== null && (url += `&launch_year=${year}`);
  launchVal !== null && (url += `&launch_success=${launchVal}`);
  landingVal !== null && (url += `&land_success=${landingVal}`);

  return axios.get(url).then((res) => res.data);
}
