const BASE_URL =
  "https://wordpress.daneclosereduced.com/daneCloseR/wp-json/wp/v2";

export async function getPosts() {
  const postsRes = await fetch(BASE_URL + "/posts?_embed&per_page=100");
  const posts = await postsRes.json();
  return posts;
}

export async function getPost(slug) {
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
