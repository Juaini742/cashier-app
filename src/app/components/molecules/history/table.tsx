import {useQuery} from "react-query";
import Invoice from "@/app/pdf/template";
import {FaRegFilePdf} from "react-icons/fa";
import {HistoryType} from "@/app/constants";
import {Table, Tbody, Th, Thead} from "../../atoms";
import {PDFDownloadLink} from "@react-pdf/renderer";
import {getHistory} from "@/app/utils/api";

function TableHistory() {
  const {data: histories} = useQuery("getHistory", getHistory);

  return (
    <section className="mt-10 overflow-x-auto relative shadow-md sm:rounded-lg">
      <Table variant="white" className="text-sm text-left">
        <Thead variant="gray" className="text-xs text-gray-700">
          <tr>
            <Th scope="col" className="py-3 px-6">
              Date
            </Th>
            <Th scope="col" className="py-3 px-6">
              Menu
            </Th>
            <Th scope="col" className="py-3 px-6">
              Payment
            </Th>
            <Th scope="col" className="py-3 px-6">
              Total Bill
            </Th>
            <Th scope="col" className="py-3 px-6">
              Cashback
            </Th>
            <Th scope="col" className="py-3 px-6">
              Status
            </Th>
            <Th scope="col" className="py-3 px-6">
              Invoice
            </Th>
          </tr>
        </Thead>
        <Tbody>
          {histories?.map((item: HistoryType) => (
            <tr key={item.id} className="bg-gray-100 border-b">
              <Th
                variant="base"
                scope="row"
                className="py-4 px-6 font-medium text-gray-900"
              >
                {new Date(item.createdAt).toLocaleDateString("en-GB")}
              </Th>
              <Th
                variant="base"
                scope="row"
                className="py-4 px-6"
              >
                {item?.checkout.map((data) => data.product.name).join(", ")}
              </Th>
              <td className="py-4 px-6">{item.payment}</td>
              <td className="py-4 px-6">{item.totalBillAmount}</td>
              <td className="py-4 px-6">IDR {item.chackback}</td>
              <td className="py-4 px-6">
                <span className="bg-primary/60 text-white text-xs font-semibold px-2.5 py-0.5 rounded italic">
                  success
                </span>
              </td>
              <td className="py-4 px-6 flex justify-center items-center">
                <span className="bg-red-500 px-2.5 py-1 rounded text-white">
                  <PDFDownloadLink
                    document={<Invoice id={item.id} />}
                    fileName={`invoice_${item.id}.pdf`}
                  >
                    <FaRegFilePdf />
                  </PDFDownloadLink>
                </span>
              </td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </section>
  );
}

export default TableHistory;
