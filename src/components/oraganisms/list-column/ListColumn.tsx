import PrimaryButton from "../../atoms/button/PrimaryButton";
import Column from "../../moledules/column/Column";

interface IListColumn {
  id: number;
  title: string;
  dateTime: string;
  imgUrl: string;
  tag: string;
}

type ListColumnProps = {
  data: IListColumn[];
};

const ListColumn = ({ data }: ListColumnProps) => {
  return (
    <div className="c-list-column">
      <div className="container">
        <div className="c-list-column__list">
          {data.map((item, index) => {
            return (
              <Column
                key={`photo-item_${index}`}
                imgUrl={item.imgUrl}
                title={item.title}
                dateTime={item.dateTime}
                tag={item.tag}
              />
            );
          })}
        </div>
        <div className="c-list-column__btn">
          <PrimaryButton>コラムをもっと見る</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ListColumn;
