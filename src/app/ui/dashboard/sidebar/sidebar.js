import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import { GoHome } from "react-icons/go";
import { RiTimeLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEvent } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { MdSportsSoccer } from "react-icons/md";
import { MdSportsEsports } from "react-icons/md";
import { RiMusic2Line } from "react-icons/ri";
import { IoBookmarkOutline } from "react-icons/io5";
import { GiMaterialsScience } from "react-icons/gi";
import { SvgLogo } from "../../svgIcons";

const menuItems = [
  {
    list: [
      {
        title: "Home",
        path: "/",
        icon: <GoHome />,
      },
      {
        title: "Timeline",
        path: "/dashboard/timeline",
        icon: <RiTimeLine />,
      },
      {
        title: "Community",
        path: "/dashboard/community",
        icon: <BsPeople />,
      },
      {
        title: "Discover",
        path: "/dashboard/descover",
        icon: <RiCompassDiscoverLine />,
      },
      {
        title: "Freinds",
        path: "/dashboard/friends",
        icon: <IoPersonOutline />,
      },
      {
        title: "BookMark",
        path: "/dashboard/bookmark",
        icon: <IoBookmarkOutline />,
      },
      {
        title: "Event",
        path: "/dashboard/event",
        icon: <MdOutlineEvent />,
      },
      {
        title: "Discusssion",
        path: "/dashboard/discussion",
        icon: <TbMessage />,
      },
    ],
  },
  {
    title: "Categories",
    list: [
      {
        title: "Sport",
        path: "/dashboard/sport",
        icon: <MdSportsSoccer />,
      },
      {
        title: "Gaming",
        path: "/dashboard/gaming",
        icon: <MdSportsEsports />,
      },
      {
        title: "Music",
        path: "/dashboard/music",
        icon: <RiMusic2Line />,
      },
      {
        title: "Tech & Science",
        path: "/dashboard/tech",
        icon: <GiMaterialsScience />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <SvgLogo />
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat, catIndex) => (
          <li key={`cat-${catIndex}`}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item, itemIndex) => (
              <MenuLink item={item} key={`item-${catIndex}-${itemIndex}`} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
