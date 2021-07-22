const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");
const blocksToHtml = require("@sanity/block-content-to-html");

const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

exports.handler = async () => {
  const query = '*[_type=="event"] | order(title asc)';
  console.log(query);
  const events = await sanity.fetch(query).then((results) => {
    const allEvents = results.map((event) => {
      const output = {
        createdAt: event._createdAt,
        id: event.slug.current,
        name: event.title,
        // url: `${process.env.URL}/.netlify/functions/getEvents`,
        // categories: event.categories,
        // body: blocksToHtml({ blocks: event.body }),
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
    console.log(allEvents);
    return allEvents;
  });

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(events),
  };
};
