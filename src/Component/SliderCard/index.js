import React from "react";
import { Card, Slider } from "antd";
import "./sliderCard.css";

function SliderCard({ customClass, showProgress }) {
  return (
    <Card className={`${customClass} card`}>
      <div className="card-header">
        <div className="card-title">Lorem ipsum dolor sit </div>
        <div className="card-right-title">
          <div>Country</div>
          <div>City</div>
        </div>
      </div>
      <div className="card-content">
        {showProgress.map((data, index) => {
          return (
            <div key={index} className="left-side-text">
              <p>
                {data.name}
                <span>{data.percent}</span>
              </p>
              <Slider defaultValue={data.value * 100} className="slider-style" />
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default SliderCard;
