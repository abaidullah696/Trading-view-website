import dbConnect from "@/lib/mongodb";
import Stock from "@/models/Stock";

export async function GET() {
  await dbConnect();

  const stocks = await Stock.find({});
  return new Response(JSON.stringify(stocks), { status: 200 });
}
