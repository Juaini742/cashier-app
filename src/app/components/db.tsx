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
    path: "/history",
    icon: <FaHistory />,
  },
  {
    name: "Status",
    path: "/status",
    icon: <FaRegChartBar />,
  },
  {
    name: "Table",
    path: "/table",
    icon: <FaTable />,
  },
  {
    name: "Setting",
    path: "/setting",
    icon: <FaCog />,
  },
];

export const categoryItems = [
  {
    name: "Food",
    icon: <FaUtensils />,
    category: "food",
  },
  {
    name: "Snack",
    icon: <FaCookieBite />,
    category: "snack",
  },
  {
    name: "Drink",
    icon: <FaMugHot />,
    category: "drink",
  },
  {
    name: "Ice Cream",
    icon: <FaIceCream />,
    category: "ice cream",
  },
  {
    name: "Coffee",
    icon: <FaCoffee />,
    category: "coffee",
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
