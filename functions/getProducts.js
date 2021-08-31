const { stringify } = require("@angular/compiler/src/util");
const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");
// const blocksToHtml = require("@sanity/block-content-to-html");

const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID_DOMKI,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

exports.handler = async () => {
  const query = '*[_type=="product"]{title, slug, defaultProductVariant, tags, "categoryTitles": categories[]->title, "investor": investor->title}'
  console.log(query);
  const products = await sanity.fetch(query).then((results) => {
    const allProducts = results.map((product) => {
      const output = {
        title: product.title,
        slug: product.slug.current,
        url: `${process.env.URL}/.netlify/functions/getproducts`,
        categories: product.categoryTitles,
        tags: product.tags,
        investor: product.investor,
        // body: blocksToHtml({ blocks: product.body }),
        images: [],
        house: product.defaultProductVariant.housecolor,
        gont: product.defaultProductVariant.gontcolor
      };


      for (let i = 0; i < product.defaultProductVariant.images.length; i++){

        const image =
        product.defaultProductVariant.images &&
        product.defaultProductVariant.images.length > 0
          ? product.defaultProductVariant.images[i].asset._ref
          : null;

        if (image) {
          output.images[i] = imageUrlBuilder(sanity).image(image).url();
        }
      }
      return output;
    });

    return allProducts;
  });

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(products),
  };
};
