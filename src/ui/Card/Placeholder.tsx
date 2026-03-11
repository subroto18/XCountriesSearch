import Styles from "./Card.module.css";
const Placeholder = () => {
  return (
    <>
      {[...Array(20)].map((_, index) => (
        <div className={Styles.card} key={index}>
          <div className={Styles.flagSkeleton}></div>
          <div className={Styles.textSkeleton}></div>
        </div>
      ))}
    </>
  );
};

export default Placeholder;
