import React from "react";
// import { useLocation } from "react-router-dom";
// class Location extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <div data-testid="location-display"></div>;
//   }
// }
// export default Location;
import { useLocation } from "react-router-dom";

// custom hook to get the current pathname in React

const LocationDisplay = () => {
  const location = useLocation();
  return location.pathname;
};
export default LocationDisplay;
