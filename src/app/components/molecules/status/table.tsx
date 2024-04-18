import Image from "next/image";
import {useQuery} from "react-query";
import {getProducts} from "@/app/utils/api";
import {ProductType} from "@/app/constants";
import {Table, Tbody, Th, Thead} from "../../atoms";

function TableStatus() {
  const {data: products} = useQuery("getProducts", getProducts);

  return (
    <section className="mt-5 overflow-x-auto relative shadow-md sm:rounded-lg">
      <Table variant="white" className="text-sm text-left">
        <Thead variant="gray" className="text-xs text-gray-700  ">
          <tr>
            <Th scope="col" className="py-3 px-6">
              Image
            </Th>
            <Th scope="col" className="py-3 px-6">
              Menu
            </Th>
            <Th scope="col" className="py-3 px-6">
              Category
            </Th>
            <Th scope="col" className="py-3 px-6">
              Price
            </Th>
            <Th scope="col" className="py-3 px-6">
              Status
            </Th>
          </tr>
        </Thead>
        <Tbody>
          {products?.products?.map((item: ProductType) => (
            <tr key={item.id} className="bg-gray-100 border-b">
              <Th
                variant="base"
                scope="row"
                className="w-28 overflow-hidden p-1"
              >
                <div className="bg-light/15 rounded-lg py-3 flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={70}
                    height={70}
                  />
                </div>
              </Th>
              <td className="py-4 px-6 font-bold">{item.name}</td>
              <td className="py-4 px-6">
                <span
                  className={`px-2.5 py-0.5 text-white rounded-md italic 
                  ${
                    item.category === "food"
                      ? "bg-orange-500"
                      : item.category === "snack"
                      ? "bg-red-500"
                      : item.category === "ice cream"
                      ? "bg-blue-500"
                      : item.category === "drink"
                      ? "bg-sky-500"
                      : "bg-purple-500"
                  }
                  `}
                >
                  {item.category}
                </span>
              </td>
              <td className="py-4 px-6 font-bold">
                IDR. {item.price.toFixed(3)}
              </td>
              <td className="py-4 px-6">
                <span className="bg-primary/60 text-white text-xs font-semibold px-2.5 py-0.5 rounded italic">
                  available
                </span>
              </td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </section>
  );
}

export default TableStatus;
