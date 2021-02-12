import React from "react";

function About() {
  return (
    // <!-- About me section -->
    <div className="bg-light my-5">
      <div className="container text-center py-5">
        <h1 className="text-center font-weight-light">
          <span className="text-info">ABOUT</span> Me
        </h1>
        <div className="lead">
          I can develop the front and the back of an app
        </div>
        <div className="row">
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>What I can do?</h5>
            <p className="text-justify">
In learning you will teach, and in teaching you will learn.” ...
Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young.

            </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>What am I doing currently?</h5>
            <p className="text-justify">
            I am currently working on Trainer at APSSDC.Web Designing(Html,css,Js,Bootstrap)
            </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>What do I believe in?</h5>
            <p className="text-justify">
            I believe that if you’re doing anything at all, you should be passionate about it. Otherwise, nothing unique and useful will come out of it.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>How may I help you?</h5>
            <p className="text-justify">
              I am here to help you,waiting for Ur queries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
