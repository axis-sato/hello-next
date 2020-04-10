import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "@components/MyLayout";
import Show from "@core/show";
import fetcher from "@core/fetcher";

interface Props {
  show: Show;
}

const Post: NextPage<Props> = ({ show }) => {
  return (
    <Layout>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?[pb]>/g, "")}</p>
      {show.image ? <img src={show.image.medium} /> : null}
    </Layout>
  );
};

Post.getInitialProps = async (context): Promise<Props> => {
  const { id } = context.query;
  const show = await fetcher<Show>(`https://api.tvmaze.com/shows/${id}`);

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
