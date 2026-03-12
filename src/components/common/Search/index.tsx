import Styles from "./Search.module.css";
import Input from "../../../ui/Input";

type Props = {
  search: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const index = ({ search, onChange }: Props) => {
  return (
    <div className={Styles.search}>
      <Input value={search} onChange={onChange} placeholder="Search country" />
    </div>
  );
};

export default index;
