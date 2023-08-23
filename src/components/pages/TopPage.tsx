import { memo } from "react";
import { Banner } from "../oraganisms/banner/Banner";
import ListHex from "../oraganisms/list-hex/ListHex";
import ListPhoto from "../oraganisms/list-photo/ListPhoto";
import { dataCircle, dataHex, dataPhotos } from "../../data/top-page";

const TopPage = memo(() => {
  return (
    <div className="p-top-page">
      <Banner data={dataCircle} />
      <ListHex data={dataHex} />
      <ListPhoto data={dataPhotos} />
    </div>
  );
});

export default TopPage;
