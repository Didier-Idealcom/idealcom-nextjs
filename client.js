const createClient = require ('@sanity/client');

module.exports = createClient({
    projectId: process.env.SANITY_PROJECTID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: process.env.SANITY_APIVERSION,
    useCdn: process.env.SANITY_USECDN
});
