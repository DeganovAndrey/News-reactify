import s from "./Header.module.css";
import { formateDate } from "../../helpers/formatDate";
import { themeIcons } from "../../assets";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header className={`${s.header} ${isDark ? s.dark : s.light}`}>
      <div className={s.info}>
        <h1 className={s.title}>NEWS REACTIFY</h1>
        <p className={s.date}>{formateDate(new Date())}</p>
      </div>
      <img
        src={isDark ? themeIcons.light : themeIcons.dark}
        width={30}
        alt="theme"
        onClick={toggleTheme}
      />
    </header>
  );
};

export default Header;
