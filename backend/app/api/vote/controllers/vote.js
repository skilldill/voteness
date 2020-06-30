'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    find: async () => {
        const fullVotes = await strapi.services.vote.find();

        const votes = fullVotes.map((vote) => {
            const { name, description, variants, anonymous, id } = vote;

            const type = { 
                name: vote['vote_type'].name,
                id: vote['vote_type'].id
            }

            return {
                id,
                name, 
                description,
                variants,
                anonymous,
                type
            }
        })

        return votes;
    }
};
