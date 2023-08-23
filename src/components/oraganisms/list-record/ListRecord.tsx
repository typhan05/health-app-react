import Record from "../../moledules/record/Record";
interface IRecord {
  id: number;
  imgUrl: string;
  title: string;
  text: string;
  linkUrl: string;
}

type ListRecordProps = {
  data: IRecord[];
};

const ListRecord = ({ data }: ListRecordProps) => {
  return (
    <div className="c-list-record">
      <div className="container">
        <div className="c-list-record__list">
          {data.map((item: IRecord) => {
            return (
              <Record
                key={`record-item_${item.id}`}
                imgUrl={item.imgUrl}
                title={item.title}
                text={item.text}
                linkUrl={item.linkUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListRecord;
