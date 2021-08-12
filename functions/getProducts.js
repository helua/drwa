const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");
const blocksToHtml = require("@sanity/block-content-to-html");

const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID_DOMKI,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

exports.handler = async () => {
  const query = '*[_type=="product"]{title, slug}'
  console.log(query);
  const products = await sanity.fetch(query).then((results) => {
    const allProducts = results.map((product) => {
      const output = {
        title: product.title,
        slug: product.slug.current,

        // url: `${process.env.URL}/.netlify/functions/getproducts`,
        // categories: product.categories,
        // body: blocksToHtml({ blocks: product.body }),
        // createdAt: product._createdAt,
        // categories: product.categories,
      };
      console.log(output);

      // const image =
      // product.mainImage.asset
      //     ? product.mainImage.asset._ref
      //     : null;

      // if (image) {
      //   output.image = imageUrlBuilder(sanity).image(image).url();
      // }
      return output;
    });
    console.log(allProducts);
    return allProducts;
  });

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(products),
  };
};
