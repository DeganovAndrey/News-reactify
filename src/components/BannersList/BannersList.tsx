import s from "./BannersList.module.css";
import { INews } from "../../helpers/interfaces";
import NewsBanner from "../NewsBanner/NewsBanner";
import withSkeleton from "../../helpers/hocs/withSkeleton";

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
