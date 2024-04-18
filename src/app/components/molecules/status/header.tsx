import React from "react";
import {Button} from "../../atoms";
import {IoIosSearch} from "react-icons/io";
import Link from "next/link";

function StatusHeader() {
  return (
    <section className="mt-10 w-full flex justify-between items-center">
      <div className="">
        <Link href="/status/form">
          <Button variant="primary" className="px-3 py-1">
            Add New Product
          </Button>
        </Link>
      </div>
      <form className="relative">
        <Button variant="primary" className="px-2 py-2 absolute left-0">
          <IoIosSearch />
        </Button>
        <input
          type="search"
          className="border pl-10 py-1 pr-2 rounded-md outline-none"
        />
      </form>
    </section>
  );
}

export default StatusHeader;
