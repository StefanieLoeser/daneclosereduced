import Link from "next/link";

import { getPost, getSlugs } from "../../utils/wordpress";

export default function PostPage({ post }) {
  console.log(post);
  return (
    <>
      <h1>{post.title.rendered}</h1>
      <img
        src={
          post["_embedded"]["wp:featuredmedia"]?.[0]["media_details"]["sizes"][
            "large"
          ]["source_url"]
        }
        alt={post["_embedded"]["wp:featuredmedia"]?.[0]["alt_text"]}
      />
      <Link href="/" className="btn btn-primary">
        Back to Home
      </Link>
    </>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  };
}
