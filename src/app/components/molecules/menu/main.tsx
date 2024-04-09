import {useQuery} from "react-query";
import MenuCategories from "./categories";
import axios from "axios";
import MenuItem from "./menu";
import {useState} from "react";
import {ProductType} from "@/app/contents";

const getProducts = async () => {
  const response = await axios.get("/api/public/products");

  return response.data?.products;
};

function MainMenu() {
  const {data: products} = useQuery("getProducts", getProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>("food");

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const filterProducts = products?.filter(
    (product: ProductType) => product?.category === selectedCategory
  );

  return (
    <div className="container">
      <div className="mt-10">
        <h1 className="text-3xl">
          Welcome To <span className="font-bold text-primary">Our Coffee</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
          culpa.
        </p>
      </div>
      <MenuCategories
        handleSelectCategory={handleSelectCategory}
        selectedCategory={selectedCategory}
      />
      <MenuItem filterProducts={filterProducts} />
    </div>
  );
}
export default MainMenu;
