import s from "./Search.module.css";

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={s.search}>
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
