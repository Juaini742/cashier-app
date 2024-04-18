import {createContext, useContext, useState} from "react";
import {BillType} from "../constants";

type BillContextType = {
  billData: BillType[];
  setBillData: React.Dispatch<React.SetStateAction<BillType[]>>;
};

export const BillContext = createContext<BillContextType | null>(null);

export const BillContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [billData, setBillData] = useState<BillType[]>([]);

  return (
    <BillContext.Provider value={{billData, setBillData}}>
      {children}
    </BillContext.Provider>
  );
};

export const useBillContext = () => {
  const context = useContext(BillContext);

  if (!context) {
    throw new Error("useBillContext must be used within a BillContextProvider");
  }

  return context;
};
