import s from "./NewsBanner.module.css";
import Image from "./../Image/Image";
import { INews } from "../../helpers/interfaces";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";

interface Props {
  item: INews;
}

const NewsBanner = ({ item }: Props) => {
  return (
    <div className={s.banner}>
      <Image image={item?.image} />
      <h3 className={s.title}>{item.title}</h3>
      <p className={s.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default NewsBanner;
