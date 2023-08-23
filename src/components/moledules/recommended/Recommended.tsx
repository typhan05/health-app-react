interface RecommendedProps {
  title: string;
  text: string;
}

const Recommended = ({ title, text }: RecommendedProps) => {
  return (
    <div className="c-recommended">
      <div className="c-recommended__content">
        <h3 className="c-recommended__title">{title}</h3>
        <p className="c-recommended__btn">{text}</p>
      </div>
    </div>
  );
};

export default Recommended;
