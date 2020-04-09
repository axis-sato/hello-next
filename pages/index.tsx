import { NextPage, NextComponentType, NextPageContext } from "next";
import Layout from "@components/MyLayout";
import Link from "next/link";

interface Props {
  title: string;
}

const PostLink: NextComponentType<NextPageContext, {}, Props> = (props) => {
  return (
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

const Blog: NextPage = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
};

export default Blog;
