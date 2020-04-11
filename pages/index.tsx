import { NextPage } from "next";
import Layout from "@components/MyLayout";
import Link from "next/link";
import fetcher from "@core/fetcher";
import Show from "@core/show";
import useSWR from "swr";

type Response = {
  source: number;
  show: Show;
};

const Index: NextPage = () => {
  const { data, error } = useSWR("shows", () =>
    fetcher<Array<Response>>("/api/shows")
  );

  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      {error && <div>{error.message}</div>}
      {!data && <div>loading.....</div>}
      {data && (
        <ul>
          {data
            .map((res) => res.show)
            .map((show) => (
              <li key={show.id}>
                <Link href="/p/[id]" as={`/p/${show.id}`}>
                  <a>{show.name}</a>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </Layout>
  );
};

export default Index;
