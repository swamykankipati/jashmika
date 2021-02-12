import React from "react";
import propsTypes from "prop-types";

function Title(props) {
  const { name, domain } = props;
  return (
    // <!-- profile Section  -->
    <div className="container card shadow">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            src={require("../images/pic.jpg")}
            alt="image-Swami"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{ fontSize: "50px" }}>
            Hi, I am <span className="text-info">{name}</span>
          </div>
          <h4 className="font-weight-light">{domain}</h4>
        </div>
      </div>
    </div>
  );
}
Title.defaultProps = {
  name: "Apparao Swami K",
  domain: "I am  Web Desiginer",
};
Title.propsTypes = {
  name: propsTypes.string.isRequired,
};
export default Title;
