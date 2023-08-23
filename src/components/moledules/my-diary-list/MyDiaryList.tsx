interface MyDiaryProps {
  dateTime: string;
  content: string;
}
const MyDiary = ({ dateTime, content }: MyDiaryProps) => {
  return (
    <div className="c-my-diary">
      <h3 className="c-my-diary__date">{dateTime}</h3>
      <p className="c-my-diary__content">{content}</p>
    </div>
  );
};

export default MyDiary;
