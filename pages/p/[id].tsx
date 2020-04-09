import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "@components/MyLayout";

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>{id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};

export default Post;
