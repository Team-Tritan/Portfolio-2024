import "@/db/connect";
import dataModel from "@/db/model";

export const revalidate = 0;

export async function GET(req: Request) {
  const comments = await dataModel.find().sort({ _id: -1 }).lean();

  console.log(comments);

  return new Response(JSON.stringify(comments), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
