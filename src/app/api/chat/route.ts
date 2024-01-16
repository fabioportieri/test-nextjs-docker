export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  console.log("LOG WORKING");
  return NextResponse.json({});
}
