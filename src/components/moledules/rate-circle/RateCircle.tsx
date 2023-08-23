import React from "react";
import { useEffect } from "react";

interface RateCircleProps {
  rate: number;
  date: string;
}
const RateCircle = ({ rate, date }: RateCircleProps) => {
  return (
    <div className="c-rate-circle">
      <div className="circle__box">
        <div className="circle__wrapper circle__wrapper--right">
          <div className="circle__whole circle__right"></div>
        </div>
        <div className="circle__wrapper circle__wrapper--left">
          <div className="circle__whole circle__left"></div>
        </div>
      </div>
      <div className="c-rate-circle__content">
        <span className="c-rate-circle__number--date">{date}</span>
        <span className="c-rate-circle__number--rate">{rate}%</span>
      </div>
    </div>
  );
};

export default RateCircle;
