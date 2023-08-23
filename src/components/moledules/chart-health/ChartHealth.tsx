import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import React, { useEffect } from "react";
import {
  filterData,
  listDate,
  listMonth,
  listWeek,
  listYear,
  options,
} from "../../../config/const";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type ChartHealthProps = {
  filter?: boolean;
};

export const ChartHealth = ({ filter }: ChartHealthProps) => {
  const [labels, setLabels] = React.useState<any[]>(listDate);
  const [activeButton, setActiveButton] = React.useState<number>(0);

  const fetchData = (labels: any[]) => {
    setLabels(labels);
  };

  useEffect(() => {
    fetchData(labels);
  }, []);

  const handleChartClick = (item: any) => {
    setActiveButton(item.id);
    switch (item.key) {
      case "day":
        return fetchData(listDate);
      case "week":
        return fetchData(listWeek);
      case "month":
        return fetchData(listMonth);
      case "year":
        return fetchData(listYear);
      default:
        return;
    }
  };

  return (
    <div className="c-chart-health">
      <Line
        options={options}
        data={{
          labels,
          datasets: [
            {
              label: "Dataset 1",
              data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
              ),
              borderColor: "rgba(255, 204, 33, 1)",
              backgroundColor: "rgba(255, 204, 33, 0.5)",
            },
            {
              label: "Dataset 2",
              data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
              ),
              borderColor: "rgba(143, 233, 208, 1)",
              backgroundColor: "rgba(143, 233, 208, 0.5)",
            },
          ],
        }}
      />
      {filter && (
        <div className="c-chart-health__btn-filter">
          {filterData.map((item, index) => {
            return (
              <button
                className={activeButton === index ? "is-active" : ""}
                key={`btn-filter-item-${index}`}
                onClick={() => handleChartClick(item)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
