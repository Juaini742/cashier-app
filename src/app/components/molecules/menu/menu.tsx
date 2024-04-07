"use client";

import Image from "next/image";
import {Button} from "../../atoms";
import {CiSquareMinus, CiSquarePlus} from "react-icons/ci";
import {showNotification} from "../../atoms/notification";
import {showConfirm} from "../../atoms/confirm";

function MenuItem() {
  const handleAddingBill = () => {
    showConfirm("Are you sure want to delete?", (isConfirmed) => {
      if (isConfirmed) {
        showNotification({
          message: "Ini adalah pesan notifikasi.",
          isSuccess: true,
        });
      } else {
        showNotification({
          message: "Ini adalah pesan notifikasi.",
          isSuccess: false,
        });
      }
    });
  };

  return (
    <section>
      <div className="my-8">
        <h2 className="font-bold text-2xl">
          Choose <span className="font-normal">Order</span>
        </h2>
      </div>
      <div className="w-full flex justify-center flex-wrap gap-5">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col bg-white items-center py-4 px-8 rounded-xl hover:shadow-md trans-300 hover:scale-105"
          >
            <div className="flex items-center gap-2">
              <div className="p-1 bg-light rounded-lg flex items-center justify-center">
                <Image
                  src="/img/menu.png"
                  alt="menu"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-32">
                <h3 className="text-sm">Spicy Hamburger</h3>
                <p className="text-secondary mb-2 font-bold text-sm">
                  IDR 15.000
                </p>
                <span className="italic bg-light text-white rounded-full py-1 px-5 text-sm">
                  Available
                </span>
              </div>
            </div>
            <div className="flex items-center justify-evenly gap-1 mt-5 w-full">
              <Button variant="primary" className="p-2">
                <CiSquarePlus />
              </Button>
              <span className="font-bold border py-1 px-3 rounded-lg">1</span>
              <Button variant="warning" className="p-2">
                <CiSquareMinus />
              </Button>
            </div>
            <form className="my-5 flex flex-wrap gap-2">
              {[...Array(3)].map((_, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full border border-primary bg-gray-200 text-sm hover:bg-light hover:text-white trans-300"
                >
                  Bakar
                </span>
              ))}
            </form>
            <Button
              onClick={handleAddingBill}
              variant="primary"
              className="px-5 py-2"
            >
              Add to billing
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
export default MenuItem;
