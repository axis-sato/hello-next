import { NextPage } from "next";
import Link from "next/link";
import Hello from "@components/Hello";

const Index: NextPage = () => {
  return (
    <div>
      <Link href="/about">
        <a title="About Page">About Page</a>
      </Link>
      <Hello />
    </div>
  );
};

export default Index;
