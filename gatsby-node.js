const path = require(`path`);
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

// exports.createPages = ({ graphql, boundActionCreators }) => {
//     const { createPage } = boundActionCreators
//     return new Promise((resolve, reject) => {
//       graphql(`
//         {
//           allMarkdownRemark {
//             edges {
//               node {
//                 fields {
//                   slug
//                 }
//               }
//             }
//           }
//         }
//       `).then(result => {
//         result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//           createPage({
//             path: node.fields.slug,
//             component: path.resolve(`./src/templates/blog-post.js`),
//             context: {
//               slug: node.fields.slug,
//             },
//           })
//         })
//         resolve()
//       })
//     })
//   };

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve("src/templates/blog-post/index.js");
  const tagTemplate = path.resolve("src/templates/tags/index.js");

  console.log('Here');

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    console.log(posts)

    // Create post detail pages
    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
        }
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      });
    });
  });
};

// exports.modifyWebpackConfig = ({ args }) => {
//   const { config, stage } = args

//   console.log(config, stage)

//   switch (stage) {
//     case "develop":
//       config.loader("sass", {
//         test: /\.(sass|scss)$/,
//         exclude: /\.module\.(sass|scss)$/,
//         loaders: ["style", "css", "postcss", "sass"],
//       })

//       break

//     case "build-css":
//       config.loader("sass", {
//         test: /\.(sass|scss)$/,
//         exclude: /\.module\.(sass|scss)$/,
//         loader: ExtractTextPlugin.extract(["css?minimize", "postcss", "sass"]),
//       })

//       break

//     case "build-html":
//       config.loader("sass", {
//         test: /\.(sass|scss)$/,
//         exclude: /\.module\.(sass|scss)$/,
//         loader: "null",
//       })

//       break

//     case "build-javascript":
//       config.loader("sass", {
//         test: /\.(sass|scss)$/,
//         exclude: /\.module\.(sass|scss)$/,
//         loader: "null",
//       })

//       break
//   }

//   return config
// }