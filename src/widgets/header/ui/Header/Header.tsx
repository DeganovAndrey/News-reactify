import { useTheme } from "@/app/providers/ThemeProvider";
import { formateDate } from "@/shared/helpers/formatDate";
import s from "./Header.module.css";
import ThemeButton from "@/features/theme/ui/ThemeButton/ThemeButton";
import { Link } from "react-router-dom";

const Header = () => {
  const { isDark } = useTheme();
  return (
    <header className={`${s.header} ${isDark ? s.dark : s.light}`}>
      <div className={s.info}>
        <Link to={"/"}>
          <h1 className={s.title}>NEWS REACTIFY</h1>
        </Link>
        <p className={s.date}>{formateDate(new Date())}</p>
      </div>
      <ThemeButton />
    </header>
  );
};

export default Header;
