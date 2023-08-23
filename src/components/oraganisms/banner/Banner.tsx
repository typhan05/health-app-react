import { ChartHealth } from "../../moledules/chart-health/ChartHealth";
import RateCircle from "../../moledules/rate-circle/RateCircle";

interface IBanner {
  rate: number;
  date: string;
}

type BannerProps = {
  data: IBanner;
};

export const Banner = ({ data }: BannerProps) => {
  return (
    <div className="c-banner">
      <div className="container">
        <div className="c-banner__inner">
          <div className="c-banner__left">
            <img
              src="assets/images/bg-rate.jpg"
              alt="img"
              className="c-banner__img"
            />
            <RateCircle rate={data.rate} date={data.date} />
          </div>
          <div className="c-banner__right">
            <ChartHealth />
          </div>
        </div>
      </div>
    </div>
  );
};
