import Hex from "../../moledules/hex/Hex";

interface IDataHex {
  id: number;
  title: string;
}

type ListHexProps = {
  data: IDataHex[];
};

const ListHex = ({ data }: ListHexProps) => {
  return (
    <div className="c-list-hex">
      <div className="container">
        <div className="c-list-hex__list">
          {data?.map((item: IDataHex) => {
            return (
              <Hex
                key={`hex-item_${item.id}`}
                imgUrl="assets/images/icons/icon_hex-1.svg"
                content={item.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListHex;
