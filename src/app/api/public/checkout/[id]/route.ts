import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (
  req: NextRequest,
  context: {params: {id: string}}
) => {
  const id = context.params.id;
  try {
    const shipping = await prisma.shipping.findFirst({
      where: {id},
      include: {
        checkout: {
          include: {
            product: {
              select: {
                name: true,
                price: true,
              },
            },
          },
        },
      },
    });

    if (!shipping) {
      return NextResponse.json({message: "Shipping not found"}, {status: 404});
    }

    return NextResponse.json({message: "success", shipping}, {status: 200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({message: "Error", error}, {status: 500});
  }
};
