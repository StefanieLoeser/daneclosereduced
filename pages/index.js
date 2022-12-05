import Head from "next/head";

import { getPosts, getMedia } from "../utils/wordpress";

import Post from "../components/Post";

export default function Home({ posts }) {
  posts.map((post) => {
    console.log("Embedded", post["_embedded"]["wp:featuredmedia"]);
  });

  const jsxPosts = posts.map((post) => {
    const featuredMedia = post["_embedded"]["wp:featuredmedia"][0];
    console.log("featuredMedia Index", featuredMedia);
    return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  return (
    <>
      <Head>
        <title>Dane Close Reduced</title>
        <meta
          name="description"
          content="Keep up to date with the latest trends in tech"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <div className="container pt-5">
        <h1 className="text-center pb-5">dance close reduced</h1>
        <div className="row">
          <div className="col-lg-8">{jsxPosts}</div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const media = await getMedia();

  return {
    props: {
      posts,
      media,
    },
    revalidate: 10, // In seconds
  };
}
