import { NextRequest, NextResponse } from "next/server";

import schema from "./schema";

import prisma from "@/prisma/client";
export async function GET(request: NextRequest) {
  // const res = await fetch("https://fakestoreapi.com/products");
  // const result = await res.json();
  const products = await prisma.product.findMany();

  return NextResponse.json({ products });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const product = await prisma.product.findUnique({
    where: { title: validation.data.title },
  });

  if (product)
    return NextResponse.json(
      { error: "Product is already existed" },
      { status: 400 }
    );

  const newProduct = await prisma.product.create({
    data: {
      title: validation.data.title,
      price: validation.data.price,
      description: validation.data.description,
    },
  });

  return NextResponse.json(newProduct, { status: 200 });
}
