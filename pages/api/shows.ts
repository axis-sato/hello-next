import { NextApiRequest, NextApiResponse } from "next";
import fetcher from "@core/fetcher";
import Show from "@core/show";

type Response = {
  source: number;
  show: Show;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const ress = await fetcher<Array<Response>>(
    "https://api.tvmaze.com/search/shows?q=batman"
  );
  res.status(200).json(ress);
};
