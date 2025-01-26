import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import s from "./LatestNews.module.css";
import { NewsList } from "@/widgets/news";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={s.section}>
      <NewsList
        type="banner"
        direction="row"
        news={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
};

export default LatestNews;
