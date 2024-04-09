import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    const products = await prisma.product.findMany({
      include: {type: true},
    });

    return NextResponse.json(
      {message: "Success", products},
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error(err);
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
