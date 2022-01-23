import Layout from "@/components/Layout";
import Link from "next/link";
import Post from "@/components/Post";
import { getPosts } from "@/lib/post";

export default function HomePage({ posts }) {
  return (
    <Layout>
      <h1 className="text-white text-5xl p-5 font-bold">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <Link href="/blog">
        <a className="block text-center border border-white text-white rounded-full py-4 my-5 transition duration-500 ease select-none hover:border-accent-blue hover:text-white hover:bg-accent-blue focus:outline-none focus:shadow-outline w-60 mx-auto">
          All Posts
        </a>
      </Link>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: { posts: getPosts().slice(0, 6) } };
}
