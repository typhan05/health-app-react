interface HexProps {
  imgUrl: string;
  content: string;
}
const Hex = ({ imgUrl, content }: HexProps) => {
  return (
    <div className="c-hex">
      <img
        src="assets/images/icons/icon_hexagon.svg"
        alt=""
        className="c-hex__bg"
      />
      <div className="c-hex__content">
        <img src={imgUrl} alt="" className="c-hex__img" />
        <p className="c-hex__text">{content}</p>
      </div>
    </div>
  );
};

export default Hex;
