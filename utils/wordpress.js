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

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
    case "page":
      elements = await getPages();
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
