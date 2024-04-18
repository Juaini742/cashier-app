import {useQuery} from "react-query";
import MenuCategories from "./categories";
import MenuItem from "./menu";
import {useState} from "react";
import {ProductType} from "@/app/constants";
import {getProducts} from "@/app/utils/api";

function MainMenu() {
  const {data: products, isLoading} = useQuery("getProducts", getProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>("food");

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const filterProducts = products?.products?.filter(
    (product: ProductType) => product?.category === selectedCategory
  );

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
      <MenuCategories
        handleSelectCategory={handleSelectCategory}
        selectedCategory={selectedCategory}
      />
      <MenuItem filterProducts={filterProducts} isLoading={isLoading} />
    </main>
  );
}
export default MainMenu;
