import { Link } from "react-router-dom";

interface ColumnProps {
  imgUrl: string;
  dateTime: string;
  title: string;
  tag: string;
}
const Column = ({ imgUrl, dateTime, title, tag }: ColumnProps) => {
  return (
    <div className="c-column">
      <div className="c-column__image">
        <img src={imgUrl} alt="" className="c-column__img" />
        <p className="c-column__date-time">{dateTime}</p>
      </div>
      <div className="c-column__content">
        <p className="c-column__title">{title}</p>
        <p className="c-column__tag">{tag}</p>
      </div>
      <Link to="#/" className="c-column__link"></Link>
    </div>
  );
};

export default Column;
