import s from "./Header.module.css";
import { formateDate } from "./../../helpers/formatDate";

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>NEWS REACTIFY</h1>
      <p className={s.date}>{formateDate(new Date())}</p>
    </header>
  );
};

export default Header;
