import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { INews } from "../..";
import s from "./NewsDetails.module.css";
import Image from "@/shared/ui/Image/Image";

interface Props {
  item: INews;
}

const NewsDetails = ({ item }: Props) => {
  return (
    <div className={s.details}>
      <Image image={item.image} />

      <div className={s.description}>
        <p>
          {item.description} ({item.language}){" "}
          <a target="_blank" href={item.url}>
            Read more...
          </a>
        </p>

        <p className={s.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>

        <ul>
          {item.category.map((category) => {
            return <button className={s.active}>{category}</button>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewsDetails;
