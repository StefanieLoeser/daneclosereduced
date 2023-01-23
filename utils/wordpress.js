const BASE_URL =
  "https://wordpress.daneclosereduced.com/wordpress/wp-json/wp/v2";

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

export async function getModels() {
  const modelsRes = await fetch(BASE_URL + "/models");
  const models = await modelsRes.json();
  console.log("Models", models);
  return models;
}

export async function getModel(slug) {
  const models = await getModels();
  const modelArray = models.filter((model) => model.slug == slug);
  const model = modelArray.length > 0 ? modelArray[0] : null;
  return model;
}

export async function getPages() {
  const pagesRes = await fetch(BASE_URL + "/pages");
  const pages = await pagesRes.json();
  return pages;
}

export async function getPage(slug) {
  const pages = await getPages();
  const pagesArray = pages.filter((page) => page.slug == slug);
  const page = pagesArray.length > 0 ? pagesArray[0] : "null";
  return page;
}

export async function getMedia() {
  const mediaRes = await fetch(BASE_URL + "/media");
  const media = await mediaRes.json();
  console.log(media);
  return media;
}

export async function getMedium(slug) {
  const media = await getMedia();
  const mediaArray = media.filter((medium) => medium.slug == slug);
  const medium = mediaArray.length > 0 ? mediaArray[0] : "null";
  return medium;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
    case "page":
      elements = await getPages();
      break;
    case "model":
      elements = await getModels();
      break;
    case "medium":
      elements = await getMedia();
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
