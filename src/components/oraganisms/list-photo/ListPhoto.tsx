import PrimaryButton from "../../atoms/button/PrimaryButton";
import Photo from "../../moledules/photo/Photo";

interface IDataPhoto {
  id: number;
  title: string;
  imgUrl: string;
}

type ListPhotoProps = {
  data: IDataPhoto[];
};

const ListPhoto = ({ data }: ListPhotoProps) => {
  return (
    <div className="c-list-photo">
      <div className="container">
        <div className="c-list-photo__list">
          {data.map((item: IDataPhoto) => {
            return (
              <Photo
                key={`photo-item_${item.id}`}
                imgUrl={item.imgUrl}
                title={item.title}
              />
            );
          })}
        </div>
        <div className="c-list-photo__btn">
          <PrimaryButton>記録をもっと見る</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ListPhoto;
