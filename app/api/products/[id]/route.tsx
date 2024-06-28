import { NextRequest, NextResponse } from "next/server";

import schema from "../schema";

import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });

  // const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  // const result = await res.json();
  return NextResponse.json(product);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product)
    return NextResponse.json(
      { error: "product is not found " },
      { status: 400 }
    );

  const updatedProduct = await prisma.product.update({
    where: { id: product.id },
    data: {
      title: validation.data.title,
      price: validation.data.price,
      description: validation.data.description,
    },
  });

  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product)
    return NextResponse.json(
      { error: "product is not found " },
      { status: 400 }
    );
  await prisma.product.delete({
    where: {
      id: product.id,
    },
  });

  return NextResponse.json({});
}
