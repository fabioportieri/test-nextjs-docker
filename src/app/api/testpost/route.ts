import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("LOG WORKING POST");
  return NextResponse.json({ data: null }, { status: 500 });
}
