const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");
const blocksToHtml = require("@sanity/block-content-to-html");

const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

exports.handler = async () => {
  const query = '*[_type=="event"]{articleTitle, "categories": categories->name, articleSlug, _createdAt, mainImage, "author": author->name}'
  console.log(query);
  const articles = await sanity.fetch(query).then((results) => {
    const allArticles = results.map((event) => {
      const output = {
        url: `${process.env.URL}/.netlify/functions/getArticles`,
        categories: event.categories,
        article: event.articleTitle,
        // body: blocksToHtml({ blocks: event.body }),
        articleSlug: event.articleSlug.current,
        author: event.author,
        createdAt: event._createdAt,
        categories: event.categories

      };
      console.log(output);

      const image =
      event.mainImage.asset
          ? event.mainImage.asset._ref
          : null;

      if (image) {
        output.image = imageUrlBuilder(sanity).image(image).url();
      }
      return output;
    });
    console.log(allArticles);
    return allArticles;
  });

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(articles),
  };
};
