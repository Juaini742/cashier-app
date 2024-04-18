"use client";

import Image from "next/image";
import {Button} from "../atoms";
import {FaRegTrashCan} from "react-icons/fa6";
import BillingForm from "../molecules/sider/billingForm";
import {useMemo, useState} from "react";
import {showConfirm} from "../atoms/confirm";
import {showNotification} from "../atoms/notification";
import {useBillContext} from "@/app/context/useBillData";
import {Empty} from "../molecules/empty";
import {BillType} from "@/app/constants";
import {CiSquareMinus, CiSquarePlus} from "react-icons/ci";

function LeftSide() {
  const [popUp, setPopUp] = useState<boolean>(false);
  const {billData, setBillData} = useBillContext();

  const incrementQuantity = (id: string) => {
    const updatedBillData = billData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
          totalPrice: ((item.quantity + 1) * item.price).toFixed(3),
        };
      }
      return item;
    });

    setBillData(updatedBillData);
  };

  const decrementQuantity = (id: string) => {
    const updatedBillData = billData.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
          totalPrice: ((item.quantity - 1) * item.price).toFixed(3),
        };
      }
      return item;
    });
    setBillData(updatedBillData);
  };

  const totalBillAmount = useMemo(
    () =>
      billData
        .reduce((acc, item) => acc + parseFloat(item.totalPrice || "0"), 0)
        .toFixed(3),
    [billData]
  );

  const handleBillPopUp = () => {
    setPopUp((prev) => !prev);
  };

  const handleDelete = (data: BillType) => {
    const updatedBillData = billData.filter((item) => item.id !== data.id);

    showConfirm("Are you sure want to delete?", (confirmed) => {
      if (confirmed) {
        setBillData(updatedBillData);
        showNotification({
          message: "Deleted item successfully",
          isSuccess: true,
        });
      } else {
        showNotification({
          message: "Deleted item was canceled",
          isSuccess: false,
        });
      }
    });
  };

  return (
    <>
      <div className="bg-white py-10 px-5 fixed right-0 top-0 h-screen w-96 overflow-y-scroll flex flex-col">
        <h2 className="font-bold text-2xl text-center">
          Order <span className="font-normal">menu</span>
        </h2>
        <div className="flex flex-col gap-5 mt-10 flex-1">
          {billData.length <= 0 ? (
            <Empty currentItem="Bill Item" />
          ) : (
            billData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between hover:scale-105 trans-300 cursor-pointer py-1"
              >
                <div className="p-1 bg-light/15 rounded-md flex items-center justify-center overflow-hidden">
                  <Image src={item.img} alt="menu" width={60} height={60} />
                </div>

                <div className="flex-1 pl-2">
                  <h3 className="font-bold">
                    {item.name}({item.type})
                  </h3>
                  <div className="flex gap-2">
                    <span>{billData.length}X</span>
                    <span>{item.totalPrice}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="flex gap-1">
                    <Button
                      onClick={() => incrementQuantity(item.id)}
                      variant="primary"
                      className="p-2"
                    >
                      <CiSquarePlus />
                    </Button>
                    <span className="font-bold border py-1 px-3 rounded-lg">
                      {item.quantity}
                    </span>
                    <Button
                      onClick={() => decrementQuantity(item.id)}
                      variant="warning"
                      className="p-2"
                    >
                      <CiSquareMinus />
                    </Button>
                  </div>
                  <div className="w-full">
                    <Button
                      onClick={() => handleDelete(item)}
                      variant="danger"
                      className="w-full py-2 flex justify-center"
                    >
                      <FaRegTrashCan />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-10 bg-primary rounded-md shadow-md px-5 py-8 text-white hover:bg-secondary trans-300">
          <h6 className="font-bold text-center">
            Bill <span className="font-normal">Information</span>
          </h6>
          <div className="flex justify-between">
            <span>Item</span>
            <span>{billData.length} items</span>
          </div>
          <div className="flex justify-between font-bold border-b-2 mb-3">
            <span>Subtotal</span>
            <span>IDR. {totalBillAmount}</span>
          </div>
          <button
            onClick={handleBillPopUp}
            className="bg-white text-black w-full rounded-lg py-2"
          >
            Take bill
          </button>
        </div>
      </div>
      <BillingForm
        totalBillAmount={totalBillAmount}
        handleBillPopUp={handleBillPopUp}
        popUp={popUp}
      />
    </>
  );
}
export default LeftSide;
