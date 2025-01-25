import { useTheme } from "@/app/providers/ThemeProvider";
import s from "./Search.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  const { isDark } = useTheme();
  return (
    <div className={`${s.search} ${isDark ? s.dark : s.light}`}>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className={s.input}
        placeholder="Javascript"
      />
    </div>
  );
};

export default Search;
