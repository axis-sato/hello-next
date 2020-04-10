import { NextPage, NextComponentType } from "next";
import { useRouter } from "next/router";
import Layout from "@components/MyLayout";

const Content: NextComponentType = () => {
  const router = useRouter();
  const { title } = router.query;
  return (
    <>
      <h1>{title}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

const Page: NextPage = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};

export default Page;
