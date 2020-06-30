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

            if (anonymous) {
                const prepareVariants = variants.map((variant) => ({
                    name: variant.name,
                    count: variant['voters_ids'].length
                }))

                return {
                    id,
                    name, 
                    description,
                    variants: prepareVariants,
                    anonymous,
                    type
                }
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
    },

    update: async (ctx) => {
        const { id } = ctx.params;
        const { body } = ctx.request;

        try {
            const foundVote = await strapi.query('vote').findOne({ id });
    
            foundVote.variants.map((variant) => {
                if (variant.name === body.variant) {
                    if (!variant['voters_ids'].includes(body.uid)) {
                        variant['voters_ids'].push(body.uid);
                    }
                }
            })

            await strapi.services.vote.update({ id }, foundVote);
            return { status: 'success' };
        } catch (error) {
            return { status: 'error', details: { ...error } };
        }
    }
};
