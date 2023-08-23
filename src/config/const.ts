export const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: "#ffffff",
      },
      grid: {
        color: "#777777",
      },
      border: {
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

export const listDate = ["1日", "5日", "10日", "15日", "20日", "25日", "30日"];

export const listWeek = [
  "月曜日",
  "火曜日",
  "水曜日",
  "木曜日",
  "金曜日",
  "土曜日",
  "日曜日",
];

export const listMonth = [
  "1日",
  "3日",
  "5日",
  "8日",
  "12日",
  "15日",
  "18日",
  "22日",
  "25日",
  "28日",
  "30日",
];

export const listYear = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];

export const filterData = [
  {
    id: 0,
    key: "day",
    label: "日",
  },
  {
    id: 1,
    key: "week",
    label: "週",
  },
  {
    id: 2,
    key: "month",
    label: "月",
  },
  {
    id: 3,
    key: "year",
    label: "年",
  },
];
