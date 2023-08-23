interface IValue {
  title: string;
  value: string;
  minus: string;
}

interface IMyExercise {
  date: string;
  values: IValue[];
}

type MyExerciseProps = {
  data: IMyExercise;
};
const MyExercise = ({ data }: MyExerciseProps) => {
  return (
    <div className="c-my-exercise">
      <div className="container">
        <div className="c-my-exercise__table">
          <div className="c-my-exercise__table__head">
            <div className="c-my-exercise__table__head__item">
              <div className="c-my-exercise__table__head__item__text">
                MY <br />
                EXERCISE
              </div>
              <div className="c-my-exercise__table__head__item__date">
                {data.date}
              </div>
            </div>
          </div>
          <div className="c-my-exercise__table__body">
            <div className="c-my-exercise__table__list">
              {data.values.map((item: IValue) => {
                return (
                  <div className="c-col-item">
                    <div className="c-col-item__left">
                      <div className="c-col-item__title">{item.title}</div>
                      <div className="c-col-item__value">{item.value}</div>
                    </div>
                    <div className="c-col-item__right">{item.minus}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExercise;
