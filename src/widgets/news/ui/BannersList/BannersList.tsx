import { INews, NewsBanner } from "@/entities/news";
import withSkeleton from "@/shared/hocs/withSkeleton";
import s from "./BannersList.module.css";

interface Props {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={s.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton<Props>(
  BannersList,
  "banner",
  9,
  "row"
);

export default BannersListWithSkeleton;
