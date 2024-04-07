import {
  FaCoffee,
  FaCog,
  FaHistory,
  FaRegChartBar,
  FaTable,
} from "react-icons/fa";
import {
  FaCookieBite,
  FaGoogle,
  FaIceCream,
  FaInstagram,
  FaMugHot,
  FaTwitter,
  FaUtensils,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

export const navItem = [
  {
    name: "Menu",
    path: "/",
    icon: <FaUtensils />,
  },
  {
    name: "History",
    path: "/s",
    icon: <FaHistory />,
  },
  {
    name: "Status",
    path: "/s",
    icon: <FaRegChartBar />,
  },
  {
    name: "Table",
    path: "/s",
    icon: <FaTable />,
  },
  {
    name: "Setting",
    path: "/s",
    icon: <FaCog />,
  },
];

export const categoryItems = [
  {
    name: "Food",
    icon: <FaUtensils />,
  },
  {
    name: "Snack",
    icon: <FaCookieBite />,
  },
  {
    name: "Drink",
    icon: <FaMugHot />,
  },
  {
    name: "Ice Cream",
    icon: <FaIceCream />,
  },
  {
    name: "Coffee",
    icon: <FaCoffee />,
  },
];

export const socialMedia = [
  {
    icon: <FaWhatsapp />,
  },
  {
    icon: <FaInstagram />,
  },
  {
    icon: <FaTwitter />,
  },
  {
    icon: <FaYoutube />,
  },
  {
    icon: <FaGoogle />,
  },
];
