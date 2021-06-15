const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Cosigned Communications`,
        name: `Cosigned.`,
        siteUrl: `https://gatsby-theme-novela.netlify.com`,
        description: `This is my description that will be used in the meta tags and important for search results`,

        // important to set the main text that appears in the hero
        hero: {
            heading: `A collection of contributions by members of co-living communities. Showcasing the everyday brilliance of Gen-Z tech creatives.`,
            maxWidth: 652,
        },
        social: [
            {
                name: `twitter`,
                url: `https://twitter.com/narative`,
            },
            {
                name: `github`,
                url: `https://github.com/narative`,
            },
        ],
    },
    plugins: [
        {
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                rootPath: "/",
                basePath: "/",
                authorsPage: true,
                mailchimp: false,
                sources: {
                    local: true,
                    contentful: false,
                },
            },
        }
    ],
};
