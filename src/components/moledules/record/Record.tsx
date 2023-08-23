import { Link } from "react-router-dom";

interface RecordProps {
  imgUrl: string;
  title: string;
  text: string;
  linkUrl: string;
}

const Record = ({ imgUrl, title, text, linkUrl }: RecordProps) => {
  return (
    <div className="c-record">
      <img src={imgUrl} alt="" className="c-record__img" />
      <div className="c-record__content">
        <h3 className="c-record__title">{title}</h3>
        <p className="c-record__btn">{text}</p>
      </div>
      <Link to={linkUrl} className="c-record__link"></Link>
    </div>
  );
};

export default Record;
