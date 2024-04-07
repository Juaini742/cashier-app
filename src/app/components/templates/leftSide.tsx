"use client";

import Image from "next/image";
import {Button} from "../atoms";
import {FaRegTrashCan} from "react-icons/fa6";
import BillingForm from "../molecules/sider/billingForm";
import {useState} from "react";

function LeftSide() {
  const [popUp, setPopUp] = useState<boolean>(false);

  const handleBillPopUp = () => {
    setPopUp((prev) => !prev);
  };

  return (
    <>
      <div className="bg-white py-10 px-5 fixed right-0 top-0 h-screen w-96 overflow-y-scroll flex flex-col">
        <h2 className="font-bold text-2xl text-center">
          Order <span className="font-normal">menu</span>
        </h2>
        <div className="flex flex-col gap-5 mt-10 flex-1">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="flex justify-between items-center hover:scale-105 trans-300 cursor-pointer"
            >
              <div className="p-1 bg-light rounded-md flex items-center justify-center overflow-hidden">
                <Image src="/menu.png" alt="menu" width={50} height={50} />
              </div>
              <div className="">
                <h3 className="font-bold">Cheese Burger</h3>
                <div className="flex gap-2">
                  <span>1x</span>
                  <span>13.000</span>
                </div>
              </div>

              <div className="">
                <Button variant="danger" className="px-3 py-2">
                  <FaRegTrashCan />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-primary rounded-md shadow-md px-5 py-8 text-white hover:bg-secondary trans-300">
          <h6 className="font-bold text-center">
            Bill <span className="font-normal">Information</span>
          </h6>
          <div className="flex justify-between">
            <span>Item</span>
            <span>10 items</span>
          </div>
          <div className="flex justify-between font-bold border-b-2 mb-3">
            <span>Subtotal</span>
            <span>IDR. 23.000</span>
          </div>
          <button
            onClick={handleBillPopUp}
            className="bg-white text-black w-full rounded-lg py-2"
          >
            Take bill
          </button>
        </div>
      </div>
      <BillingForm handleBillPopUp={handleBillPopUp} popUp={popUp} />
    </>
  );
}
export default LeftSide;
