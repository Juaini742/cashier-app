import {categoryItems} from "../../db";

function MenuCategories({
  handleSelectCategory,
  selectedCategory,
}: {
  handleSelectCategory: (category: string) => void;
  selectedCategory: string;
}) {
  return (
    <section>
      <div className="mt-8 mb-3">
        <h2 className="font-bold text-2xl">
          Menu <span className="font-normal">Category</span>
        </h2>
      </div>
      <div className="flex justify-center gap-3 bg-white rounded-xl py-5 shadow-md ">
        {categoryItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleSelectCategory(item.category)}
            className={`flex flex-col justify-center items-center text-center gap-2 py-2 rounded-md w-20 hover:bg-light trans-300 group
            ${selectedCategory === item.category ? "bg-light" : ""}
            `}
          >
            <span className="p-3 border rounded-md bg-white group-hover:text-primary">
              {item.icon}
            </span>
            <span
              className={`text-sm group-hover:text-white ${
                selectedCategory === item.category ? "text-white" : ""
              }`}
            >
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
export default MenuCategories;
