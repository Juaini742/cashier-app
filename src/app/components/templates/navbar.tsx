import Link from "next/link";
import {navItem} from "../db";

function Navbar() {
  return (
    <div className="bg-white min-h-screen w-32 overflow-hidden fixed left-0">
      <div className="mt-10">
        <h2 className="text-center">Coffee</h2>
      </div>
      <ul className="mt-10 flex flex-col gap-6 px-4">
        {navItem.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`flex flex-col gap-1 py-3 items-center rounded-md hover:bg-primary hover:text-white trans-300  text-indigo-800`}
          >
            <span className="font-bold">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
}
export default Navbar;
