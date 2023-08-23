import { memo } from "react";
import ListRecommended from "../oraganisms/list-recommended/ListRecommended";
import ListColumn from "../oraganisms/list-column/ListColumn";
import { dataListColumn, dataListRecomend } from "../../data/column-page";

const ColumnPage = memo(() => {
  return (
    <div className="p-column-page">
      <ListRecommended data={dataListRecomend} />
      <ListColumn data={dataListColumn} />
    </div>
  );
});

export default ColumnPage;
