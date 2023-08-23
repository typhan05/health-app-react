import { ChartHealth } from "../../moledules/chart-health/ChartHealth";

type BodyRecordProps = {
  filter: boolean;
};

const BodyRecord = ({ filter }: BodyRecordProps) => {
  return (
    <div className="c-body-record">
      <div className="container">
        <div className="c-body-record__chart">
          <div className="c-body-record__title">
            BODY <br />
            RECORD
            <span className="c-body-record__title--sub">2021.05.21</span>
          </div>
          <ChartHealth filter={filter} />
        </div>
      </div>
    </div>
  );
};

export default BodyRecord;
