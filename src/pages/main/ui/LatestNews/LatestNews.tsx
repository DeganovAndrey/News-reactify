import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import s from "./LatestNews.module.css";
import { NewsList } from "@/widgets/news";
import { INews } from "@/entities/news";
import { useAppDispatch } from "@/app/appStore";
import { setCurrentNews } from "@/entities/news/model/newsSlice";
import { useNavigate } from "react-router-dom";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };
  return (
    <section className={s.section}>
      <NewsList
        type="banner"
        direction="row"
        news={data && data.news}
        isLoading={isLoading}
        viewNewsSlot={(news: INews) => (
          <p onClick={() => navigateTo(news)}>view more</p>
        )}
      />
    </section>
  );
};

export default LatestNews;
