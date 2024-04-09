"use client";

import Image from "next/image";
import {Button} from "../../atoms";
import {ProductType} from "@/app/contents";
import {showNotification} from "../../atoms/notification";
import {useBillContext} from "@/app/context/useBillData";
import {Empty} from "../empty";
import {useState} from "react";

function MenuItem({filterProducts}: {filterProducts: ProductType[]}) {
  const {setBillData} = useBillContext();
  const [selectedType, setSelectedType] = useState("");
  const typeName = filterProducts?.map(
    (item: any) => item.type.find((data: any) => data.id === selectedType)?.name
  );
  const typeNameString = typeName?.join("");

  const handleRadioChange = (id: string) => {
    setSelectedType(id);
  };

  const handleAddingBill = (data: ProductType) => {
    setBillData((prevBillData: any) => [
      ...prevBillData,
      {
        ...data,
        type: typeNameString,
        quantity: 1,
        totalPrice: data.price.toFixed(3),
      },
    ]);
    showNotification({
      message: "Successfully adding product to the bill",
      isSuccess: true,
    });
  };

  const handleProductClick = (product: ProductType) => {
    if (product.type && product.type.length > 0) {
      const isTypeBelongsToProduct = product.type.find(
        (type) => type.id === selectedType
      );
      if (!selectedType || !isTypeBelongsToProduct) {
        showNotification({
          message:
            "Please select a valid type for this product before adding to the bill",
          isSuccess: false,
        });
        return;
      }
      handleAddingBill(product);
    } else {
      handleAddingBill(product);
    }
  };

  return (
    <section>
      <div className="my-8">
        <h2 className="font-bold text-2xl">
          Choose <span className="font-normal">Order</span>
        </h2>
      </div>
      <div className="w-full flex justify-center flex-wrap gap-5">
        {filterProducts?.length <= 0 ? (
          <Empty currentItem="Products" />
        ) : (
          filterProducts?.map((item: ProductType) => (
            <div
              key={item.id}
              className="flex flex-col bg-white items-center py-4 px-8 rounded-xl hover:shadow-md trans-300 hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <div className="p-1 bg-light/15 rounded-lg flex items-center justify-center">
                  <Image src={item.img} alt="menu" width={100} height={100} />
                </div>
                <div className="w-32">
                  <h3 className="text-sm">{item.name}</h3>
                  <p className="text-secondary mb-2 font-bold text-sm">
                    IDR {item.price.toFixed(3)}
                  </p>
                  <span className="italic bg-light text-white rounded-full py-1 px-5 text-sm">
                    Available
                  </span>
                </div>
              </div>
              <form className="my-5 flex flex-wrap gap-2">
                {item?.type?.map((data: any) => (
                  <div key={data.id}>
                    <input
                      type="radio"
                      className="opacity-0 absolute radio"
                      id={`lang-${data.id}`}
                      value={data.name}
                      onChange={(event) => handleRadioChange(data.id)}
                      checked={selectedType === data.id}
                    />
                    <label
                      htmlFor={`lang-${data.id}`}
                      className={`label-${
                        data.id
                      } px-3 py-1 cursor-pointer rounded-full border border-primary text-sm hover:bg-light hover:text-white trans-300 ${
                        selectedType === data.id
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {data.name}
                    </label>
                  </div>
                ))}
              </form>
              <Button
                onClick={() => handleProductClick(item)}
                variant="primary"
                className="px-5 py-2"
              >
                Add to billing
              </Button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
export default MenuItem;
