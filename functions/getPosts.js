const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");
const blocksToHtml = require("@sanity/block-content-to-html");

const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID_BLOG,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

exports.handler = async () => {
  const query = '*[_type=="post" && "zapowiedź" in categories[]->title || "relacja" in categories[]->title ]{title, slug, _createdAt, mainImage, "author": author->name, "categoryTitles": categories[]->title}'
  console.log(query);
  const posts = await sanity.fetch(query).then((results) => {
    const allPosts = results.map((post) => {
      const output = {
        title: post.title,
        slug: post.slug.current,
        url: `${process.env.URL}/.netlify/functions/getPosts`,
        categories: post.categoryTitles,
        author: post.author,
        createdAt: post._createdAt,
      };
      console.log(output);

      const image =
      post.mainImage.asset
          ? post.mainImage.asset._ref
          : null;

      if (image) {
        output.image = imageUrlBuilder(sanity).image(image).url();
      }
      return output;
    });
    console.log(allPosts);
    return allPosts;
  });

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(posts),
  };
};
