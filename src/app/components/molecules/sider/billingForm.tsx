import {IoClose} from "react-icons/io5";
import {Button, Title} from "../../atoms";

type Props = {
  handleBillPopUp: () => void;
  popUp: boolean;
};

function BillingForm({handleBillPopUp, popUp}: Props) {
  return (
    <div
      className={` p-10 fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-black/20
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
            <span>23 items</span>
          </div>
          <div className="flex justify-between mt-5 text-white">
            <h6>Total price: </h6>
            <span>IDR. 92.000</span>
          </div>
          <div className="mt-5 flex flex-col gap-2 text-white">
            <label htmlFor="payment">Payment</label>
            <input
              type="number"
              name="payment"
              className="outline-none bg-transparent border-b-2 "
              placeholder="your amount"
            />
          </div>
          <div className="flex justify-between mt-5 text-white">
            <h6>Total cashback: </h6>
            <span>IDR. 10.000</span>
          </div>
          <Button variant="white" className="py-2 mt-5 w-full">
            Pay now
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
