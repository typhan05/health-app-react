import { memo } from "react";
import BodyRecord from "../oraganisms/body-record/BodyRecord";
import ListRecord from "../oraganisms/list-record/ListRecord";
import MyExercise from "../oraganisms/my-exercise/MyExercise";
import ListDiary from "../oraganisms/list-diary/ListDiary";
import {
  dataMyDiary,
  dataMyExercises,
  dataRecords,
} from "../../data/record-page";

const MyRecordPage = memo(() => {
  return (
    <div className="p-my-record-page">
      <ListRecord data={dataRecords} />
      <BodyRecord filter={true} />
      <MyExercise data={dataMyExercises} />
      <ListDiary data={dataMyDiary} />
    </div>
  );
});

export default MyRecordPage;
