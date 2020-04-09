import { NextPage, NextComponentType, NextPageContext } from "next";
import Layout from "@components/MyLayout";
import Link from "next/link";

interface Props {
  id: string;
}

const PostLink: NextComponentType<NextPageContext, {}, Props> = (props) => {
  return (
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  );
};

const Blog: NextPage = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </Layout>
  );
};

export default Blog;
