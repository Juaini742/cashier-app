import Template from "./components/templates/main";
import MenuItem from "./components/molecules/menu/menu";
import MenuCategories from "./components/molecules/menu/categories";

export default function Home() {
  return (
    <Template>
      <div className="container">
        <div className="mt-10">
          <h1 className="text-3xl">
            Welcome To{" "}
            <span className="font-bold text-primary">Our Coffee</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
            culpa.
          </p>
        </div>
        <MenuCategories />
        <MenuItem />
      </div>
    </Template>
  );
}
