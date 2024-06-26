import {IoClose} from "react-icons/io5";
import {Button, Title} from "../../atoms";
import {useBillContext} from "@/app/context/useBillData";
import {useState} from "react";
import {BillType, CheckoutType} from "@/app/constants";
import axios from "axios";
import {useMutation} from "react-query";
import {showNotification} from "../../atoms/notification";

type Props = {
  handleBillPopUp: () => void;
  popUp: boolean;
  totalBillAmount: string;
};

const postCheckout = async (data: BillType[]) => {
  const response = await axios.post("/api/public/checkout", data);

  return response.data;
};

function BillingForm({handleBillPopUp, popUp, totalBillAmount}: Props) {
  const mutation = useMutation("postCheckout", postCheckout);
  const {billData, setBillData} = useBillContext();
  const [payment, setPayment] = useState<string>("0");

  const cashback = (
    parseInt(payment.replace(/[^0-9]/g, "")) -
    parseInt(totalBillAmount.replace(/[^0-9]/g, ""))
  ).toLocaleString("id-ID");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawPayment = e.target.value.replace(/[^0-9]/g, "");
    const formattedPayment = parseInt(rawPayment).toLocaleString("id-ID");
    setPayment(formattedPayment);
  };

  const handlePay = (e: any) => {
    e.preventDefault();
    const updatedBillData = billData.map((item) => ({
      ...item,
      totalBillAmount: totalBillAmount,
      payment: payment,
      cashback: cashback,
    }));

    setBillData(updatedBillData);

    mutation.mutate(updatedBillData, {
      onSuccess: () => {
        setTimeout(() => {
          mutation.reset();
        }, 2000);
        showNotification({
          message: "Payment is successfully",
          isSuccess: true,
        });
        setBillData([]);
      },
    });
  };

  return (
    <div
      className={`p-10 fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-black/20
      ${popUp ? "scale-100" : "scale-0"}
    `}
    >
      <div
        className={`trans-300 relative p-10 bg-primary rounded-lg shadow-xl ${
          popUp ? "scale-100" : "scale-0"
        }`}
      >
        <form>
          <Title bold="More Bill" normal="Information" className="text-white" />
          <div className="flex justify-between mt-5 text-white">
            <h6>Total menu item: </h6>
            <span>{billData.length} items</span>
          </div>
          <div className="flex justify-between mt-5 text-white">
            <h6>Total price: </h6>
            <span>IDR. {totalBillAmount}</span>
          </div>
          <div className="mt-5 flex flex-col gap-2 text-white">
            <label htmlFor="payment">Payment</label>
            <input
              type="text"
              name="payment"
              value={payment.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              onChange={handleInputChange}
              className="outline-none bg-transparent border-b-2 "
              placeholder="your amount"
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </div>
          <div className="flex justify-between mt-5 text-white">
            <h6>Total cashback: </h6>
            <span>IDR. {cashback}</span>
          </div>
          <Button
            onClick={handlePay}
            variant="white"
            className={`py-2 mt-5 w-full ${
              mutation.isLoading ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            {mutation.isLoading ? "Loading..." : "Pay now"}
          </Button>
        </form>
        <button
          onClick={handleBillPopUp}
          className="absolute -top-4 bg-primary p-2 rounded-full -right-4 text-white text-lg"
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
}
export default BillingForm;
