import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {upload} from "../../../utils/multerConfig"; // Fixed import path

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

export const POST = async (req: NextRequest) => {
  try {
    const {name, price, category, img, type} = await req.json();

    if (!name || price || category || img) {
      return NextResponse.json({message: "Some credential is missing"});
    }

    upload.single("file")(req, async (error: any) => {
      if (error) {
        return NextResponse.json(
          {message: "Some credential is missing"},
          {
            status: 400,
          }
        );
      }

      let finalImageUrl = "";

      if (req.file) {
        const {filename} = req.file;
        finalImageUrl =
          req.protocol + "://" + req.get("host") + "/Images/" + filename;
      }

      const product = await prisma.product.create({
        data: {
          name,
          price,
          category,
          status: true,
          img: finalImageUrl,
        },
      });
    });
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

export const PUT = async (req: NextRequest) => {
  const {status, id} = await req.json();
  if (!status || !id) {
    return NextResponse.json(
      {message: "Some credential is missing"},
      {
        status: 400,
      }
    );
  }
  try {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    NextResponse.json(
      {
        message: "SUccess",
        product,
      },
      {
        status: 200,
      }
    );
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
