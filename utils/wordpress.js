// import { request } from "graphql-request";

// const fetcher = (query) => request(process.env.WP_GRAPHQL_API, query);

// const { data, error } = useSWR(
//   `{
//     models {
//       nodes {
//         modelTitle
//         image {
//           mediaDetails {
//             sizes(include: MEDIUM_LARGE) {
//               sourceUrl
//             }
//           }
//         }
//         secondaryImage {
//           id
//           sourceUrl(size: MEDIUM_LARGE)
//         }
//       }
//     }
//   }`,
//   fetcher
// );

// if (error) {
//   console.log(error.info);
// } else {
//   console.log("Models", models);
// }

// export async function getModels() {
//   const url = "http://localhost:3000/api/models";
//   const { data, error } = useSWR(url, fetcherFunc);

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   const models = data.data.models.nodes[0];
//   console.log(models);
// }

// export async function getModel(slug) {
//   const modelsRes = await getModels();
//   return model;
// }

const BASE_URL =
  "https://wordpress.daneclosereduced.com/daneCloseR/wp-json/wp/v2";

export async function getPosts() {
  const postsRes = await fetch(BASE_URL + "/posts?_embed&per_page=100");
  const posts = await postsRes.json();
  return posts;
}

export async function getPost(slug) {
  console.log(slug);
  const posts = await getPosts();
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getMedias() {
  const mediasRes = await fetch(BASE_URL + "/media");
  const medias = await mediasRes.json();
  return medias;
}

export async function getMedia(slug) {
  const medias = await getMedias();
  const mediaArray = medias.filter((media) => media.slug == slug);
  const media = mediaArray.length > 0 ? mediaArray[0] : "null";
  return media;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
    case "media":
      elements = await getMedias();
      break;
  }
  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}
