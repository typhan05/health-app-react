import Recommended from "../../moledules/recommended/Recommended";

interface IRecommended {
  id: number;
  title: string;
  text: string;
}

type ListRecommendedProps = {
  data: IRecommended[];
};

const ListRecommended = ({ data }: ListRecommendedProps) => {
  return (
    <div className="c-list-recommended">
      <div className="container">
        <div className="c-list-recommended__list">
          {data.map((item, index) => {
            return (
              <Recommended
                key={`recommended-item-${index}`}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListRecommended;
