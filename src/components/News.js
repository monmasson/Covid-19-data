import React from "react";
import "../Stylesheets/News.css"
import {Button} from 'reactstrap'

function News() {
  return (
    <div className="news">
      <div className="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/United_States_Centers_for_Disease_Control_and_Prevention_logo.svg/270px-United_States_Centers_for_Disease_Control_and_Prevention_logo.svg.png"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1>Hear it from the source! </h1>
            <p className="button">
            <Button onClick={()=> window.open("https://covid.cdc.gov/covid-data-tracker/#datatracker-home")}>CDC DATA</Button>;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;