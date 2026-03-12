import type { CountryDataType } from "../../types";
import Styles from "./Card.module.css";
type Props = {
  key: string | number;
  data: CountryDataType;
};
const Card = ({ key, data }: Props) => {
  const { common, png } = data;

  return (
    <div key={key} className={Styles.card}>
      <img className={Styles.img} src={png} alt={`${common} flag`} />
      <p className={Styles.title}>{common}</p>
    </div>
  );
};
export default Card;
