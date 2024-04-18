import React from "react";
import FormCreateProduct from "./form";

function MainCreateProduct() {
  return (
    <main className="container">
      <div className="mt-10">
        <h1 className="text-3xl">
          Welcome To <span className="font-bold text-primary">Our Coffee</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
          culpa.
        </p>
      </div>
      <FormCreateProduct />
    </main>
  );
}

export default MainCreateProduct;

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         if (reader.result) {
//           setValue("img", reader.result.toString());
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };
