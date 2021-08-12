const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");

const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

exports.handler = async () => {
  const query = '*[_type=="event"]{eventStart, eventEnd, title, slug, mainImage, categories, "organiser": organiser->name} | order(title asc)';
  console.log(query);
  const events = await sanity.fetch(query).then((results) => {
    const allEvents = results.map((event) => {
      const output = {
        start: event.eventStart,
        end: event.eventEnd,
        title: event.title,
        slug: event.slug.current,
        url: `${process.env.URL}/.netlify/functions/getEvents`,
        categories: event.categories,
        organiser: event.organiser
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
