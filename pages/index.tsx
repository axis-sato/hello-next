import { NextPage } from "next";
import Layout from "@components/MyLayout";
import Link from "next/link";
import fetcher from "@core/fetcher";
import Show from "@core/show";

type Response = {
  source: number;
  show: Show;
};

interface Props {
  shows: Array<Show>;
}

const Index: NextPage<Props> = ({ shows }) => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Index.getInitialProps = async (): Promise<Props> => {
  const ress = await fetcher<Array<Response>>(
    "https://api.tvmaze.com/search/shows?q=batman"
  );

  console.log(ress);

  return {
    shows: ress.map((res) => res.show),
  };
};

export default Index;
