type ItemType = {
  length: number;
  find(arg0: (data: any) => boolean): unknown;
  map(
    arg0: (data: any, index: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  id?: string;
  name: string;
};

export type ProductType = {
  id: string;
  name: string;
  price: number;
  status: boolean;
  img: string;
  category: string;
  type: ItemType;
};

export type BillType = {
  id: string;
  name: string;
  price: number;
  status: boolean;
  img: string;
  category: string;
  type: string;
  quantity: number;
  totalPrice?: string;
  totalBillAmount: string;
  payment?: string;
  cashback?: string;
};

export type CheckoutType = {
  totalBillAmount: string;
  payment: string;
  cashback: string;
};

export type CheckoutTwoType = {
  product: ProductType;
  quantity: number;
  id: string;
};

export type HistoryType = {
  id: string;
  totalBillAmount: string;
  payment: string;
  chackback: string;
  createdAt: string;
  checkout: CheckoutTwoType[];
};
