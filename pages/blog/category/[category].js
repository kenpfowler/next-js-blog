import Layout from "@/components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "@/components/Post";
import CategoryList from "@/components/CategoryList";
import { getPosts } from "@/lib/post";

export default function CategoryBlogPage({ posts, categoryName, categories }) {
  return (
    <Layout>
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="w-full mr-10">
          <h1 className="text-white text-5xl p-5 font-bold capitalize">
            {categoryName === "css" || categoryName === "php"
              ? `Posts in ${categoryName.toUpperCase()}`
              : `Posts in ${categoryName}`}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <CategoryList categories={categories} />

            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const postsByCategory = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return frontmatter.category.toLowerCase();
  });

  const uniqueCategories = [...new Set(postsByCategory)].map((path) => ({
    params: { category: path },
  }));

  return {
    paths: uniqueCategories,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category } }) {
  //for each path to a category of posts return all the metadata about those posts as props

  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category
  );

  return {
    props: {
      posts: categoryPosts,
      categoryName: category,
      categories: uniqueCategories,
    },
  };
}
