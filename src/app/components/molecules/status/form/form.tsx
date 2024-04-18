import {Button} from "@/app/components/atoms";
import {ProductType} from "@/app/constants";
import Image from "next/image";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

type FormType = {
  img: string;
  name: string;
  price: number;
  type: string[];
};

function FormCreateProduct() {
  const {register, handleSubmit, setValue, watch} = useForm<FormType>();
  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const preview = reader.result as string;
        if (typeof preview === "string") {
          setValue("img", preview);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center mt-10 bg-white rounded-lg p-4"
    >
      <div className="mb-4 w-full flex gap-3 items-end">
        <div className="w-full">
          <label htmlFor="name" className="text-lg font-bold text-gray-400">
            Image:
          </label>
          <input
            type="file"
            id="img"
            className="border rounded-md w-full px-3 py-3 mt-1 outline-none"
            style={{paddingLeft: "10px"}}
            {...register("img")}
          />
        </div>
        <div className="w-40 h-32 rounded-lg bg-gray-200 overflow-hidden flex justify-center items-center">
          {/* {imgFile && typeof imgFile === "string" ? (
            <Image
              src={imgFile}
              alt="preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <p>No image selected</p>
          )} */}
        </div>
      </div>
      <div className="mb-4 w-full" style={{position: "relative"}}>
        <label
          htmlFor="name"
          className="text-lg font-bold text-gray-400"
          style={{
            position: "absolute",
            top: "-10px",
            left: "10px",
            background: "white",
            padding: "0 5px",
          }}
        >
          Product Name:
        </label>
        <input
          type="text"
          id="name"
          className="border rounded-md w-full px-3 py-3 mt-1 outline-none"
          style={{paddingLeft: "10px"}}
          {...register("name")}
          placeholder="Your product name"
        />
      </div>
      <div className="mb-4 w-full" style={{position: "relative"}}>
        <label
          htmlFor="price"
          className="text-lg font-bold text-gray-400"
          style={{
            position: "absolute",
            top: "-10px",
            left: "10px",
            background: "white",
            padding: "0 5px",
          }}
        >
          Price:
        </label>
        <input
          type="number"
          id="price"
          className="border w-full rounded-md px-3 py-3 mt-1 outline-none"
          style={{paddingLeft: "10px"}}
          {...register("price")}
          placeholder="Your price product"
        />
      </div>
      <div className="mb-4 w-full" style={{position: "relative"}}>
        <label
          htmlFor="variant"
          className="text-lg font-bold text-gray-400"
          style={{
            position: "absolute",
            top: "-10px",
            left: "10px",
            background: "white",
            padding: "0 5px",
          }}
        >
          Variant:
        </label>
        <input
          type="text"
          id="variant"
          className="border w-full rounded-md px-3 py-3 mt-1 outline-none"
          style={{paddingLeft: "10px"}}
          {...register("type")}
          placeholder="Your variant product"
        />
      </div>
      <div className="">
        <Button variant="primary" className="py-2 px-5">
          Save
        </Button>
      </div>
    </form>
  );
}

export default FormCreateProduct;
