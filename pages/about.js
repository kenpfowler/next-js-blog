import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <h1 className="text-5xl border-b-4 p-5 font-bold">About</h1>
      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5">DevSpace Blog</h3>
        <p className="mb-3"> This is a blog built with next.js and markdown.</p>
      </div>
    </Layout>
  );
}
