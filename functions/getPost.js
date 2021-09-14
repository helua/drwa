const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");
const blocksToHtml = require("@sanity/block-content-to-html");

const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID_BLOG,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

exports.handler = async (event) => {
  const id = event.queryStringParameters.id || "home";
    console.log(id);
  const query = `*[_type == "post"][slug.current=="${id}"]{title, slug, _createdAt, mainImage, "author": author->name, "categoryTitles": categories[]->title, body}`;
    console.log('siemanko'+query);

  const post = await sanity.fetch(query).then((result) => {
    const thisPost = result.map((post) => {
      const output = {
        createdAt: post._createdAt,
        name: post.title,
        url: `${process.env.URL}/.netlify/functions/getPost`,
        categories: post.categoryTitles,
        body: blocksToHtml({ blocks: post.body }),
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
    console.log(thisPost);
    return thisPost;
  });

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post[0])
  }
};
