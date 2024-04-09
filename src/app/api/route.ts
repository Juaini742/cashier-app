import {NextRequest, NextResponse} from "next/server";

export const GET = async (req: NextRequest) => {
  const items = [1, 2, 3];
  // const products = getAllProduct(items);
  return NextResponse.json(
    {message: "Berhasil", data: items},
    {
      status: 200,
    }
  );
};
