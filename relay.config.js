module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: './src/components',
  schema: './data/schema.graphql',
  extensions: 'js jsx',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**']
};
