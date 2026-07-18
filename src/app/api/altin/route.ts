import { NextResponse } from "next/server";
import { getGoldPrice } from "@/lib/gold";

export async function GET() {
  const price = await getGoldPrice();

  if (!price) {
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }

  return NextResponse.json(price);
}
