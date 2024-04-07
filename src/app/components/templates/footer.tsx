import Link from "next/link";
import {socialMedia} from "../db";

function Footer() {
  return (
    <div className="w-full bg-white py-10 container rounded-t-xl mt-10">
      <h4 className="text-center">Build with nextjs 14</h4>
      <div className="flex gap-3 justify-center mt-5">
        {socialMedia.map((item, index) => (
          <Link
            key={index}
            href="/"
            className="p-4 border rounded-xl hover:bg-primary trans-300 hover:text-white"
          >
            <span>{item.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Footer;
