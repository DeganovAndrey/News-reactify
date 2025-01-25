import LatestNews from "./LatestNews/LatestNews";
import s from "./Main.module.css";
import NewsByFilters from "./NewsByFilters/NewsByFilters";

const MainPage = () => {
  return (
    <main className={s.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default MainPage;
