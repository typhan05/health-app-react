import PrimaryButton from "../../atoms/button/PrimaryButton";
import MyDiary from "../../moledules/my-diary-list/MyDiaryList";

interface IListDiary {
  id: number;
  date: string;
  content: string;
}

type ListDiaryProps = {
  data: IListDiary[];
};

const ListDiary = ({ data }: ListDiaryProps) => {
  return (
    <div className="c-list-diary">
      <div className="container">
        <div className="c-list-diary__title">MY DIARY</div>
        <div className="c-list-diary__list">
          {data.map((item, index) => {
            return (
              <MyDiary
                key={`diary-item-${index}`}
                dateTime={item.date}
                content={item.content}
              />
            );
          })}
        </div>
        <div className="c-list-diary__btn">
          <PrimaryButton>自分の日記をもっと見る</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ListDiary;
