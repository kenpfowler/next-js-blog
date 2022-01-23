import Head from "next/head";
import Header from "./Header";
import Search from "./Search";

export default function Layout({
  title,
  children,
  keywords,
  description,
  url,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta content={description} property="description" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={title} property="twitter:title" />
        <meta content={description} property="twitter:description" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kennyf.ca/assets/images/blue-light-shining-on-keyboard.jpg"
        />
        <meta property="og:url" content={url} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Search />
      <main className="container bg-black py-5 mx-auto md:px-10">
        {children}
      </main>
    </div>
  );
}
Layout.defaultProps = {
  title: "Kenny Fowler | Software Engineer",
  keywords: "Software Development, Web Development, Application Development",
  description:
    "Kenny Fowler is a full-stack software engineer based in Toronto, ON, Canada. Contact Kenny to get started on your next software project!",
  url: "blog.kennyf.ca",
  site_name: "Kenny Fowler | Software Engineer",
};
