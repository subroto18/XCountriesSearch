import type { CountryDataType } from "../../types";
import Styles from "./Card.module.css";
type Props = {
  key: string | number;
  data: CountryDataType;
};
const Card = ({ key, data }: Props) => {
  const { flag, name } = data;

  return (
    <div key={key} className={Styles.card}>
      <img className={Styles.img} src={flag} alt={`${name} flag`} />
      <p className={Styles.title}>{name}</p>
    </div>
  );
};
export default Card;
