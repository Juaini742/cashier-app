import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
export const POST = async (req: NextRequest) => {
  try {
    const {totalPrice, cashBack, quantity, type, productId} = await req.json();

    if (!totalPrice || !cashBack || !quantity || !type || !productId) {
      return NextResponse.json(
        {message: "Missing data information"},
        {status: 401}
      );
    }

    const checkoutData = await prisma.
  } catch (error) {
    console.error(error);
    NextResponse.json(
      {
        message: "Error",
      },
      {
        status: 500,
      }
    );
  }
};
