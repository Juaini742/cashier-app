import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {BillType} from "@/app/constants";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    const shipping = await prisma.shipping.findMany({
      include: {
        checkout: {
          include: {
            product: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(
      {message: "success", shipping},
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Error",
        error,
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const dataArray = await req.json();

    if (!dataArray) {
      return NextResponse.json(
        {message: "Missing data information"},
        {status: 401}
      );
    }

    const shippingData = await prisma.shipping.create({
      data: {
        chackback: dataArray[0].cashback,
        payment: dataArray[0].payment,
        totalBillAmount: dataArray[0].totalBillAmount,
      },
    });

    const checkoutData = dataArray.forEach(async (item: BillType) => {
      await prisma.checkout.create({
        data: {
          quantity: item.quantity,
          type: item.type,
          product: {connect: {id: item.id}},
          shipping: {connect: {id: shippingData.id}},
        },
      });
    });

    return NextResponse.json(
      {message: "Success", data: checkoutData},
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    NextResponse.json(
      {
        message: "Error",
        error,
      },
      {
        status: 500,
      }
    );
  }
};
