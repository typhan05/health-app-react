import { Link } from "react-router-dom";

interface PhotoProps {
  imgUrl: string;
  title: string;
}
const Photo = ({ imgUrl, title }: PhotoProps) => {
  return (
    <div className="c-photo">
      <img src={`${imgUrl}`} alt="" className="c-photo__img" />
      <div className="c-photo__content">
        <p className="c-photo__title">{title}</p>
      </div>
      <Link to="#/" className="c-photo__link"></Link>
    </div>
  );
};

export default Photo;
