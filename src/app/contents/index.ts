type ItemType = {
  length: number;
  find(arg0: (data: any) => boolean): unknown;
  map(
    arg0: (data: any, index: any) => import("react").JSX.Element
  ): import("react").ReactNode;
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
  cashback?: number;
  payment?: number;
};

export type CheckoutType = {
  totalBillAmount: string;
  payment: string;
  cashback: string;
};
