import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import s from "./LatestNews.module.css";
import { BannersList } from "@/widgets/news/ui";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={s.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
