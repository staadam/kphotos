const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const templatePath = path.resolve(`src/components/pages/Pair/Pair.tsx`)

  const result = await graphql(`
    {
      allDatoCmsPair {
        nodes {
          pairId
        }
      }
    }
  `)
  
  result.data.allDatoCmsPair.nodes.forEach(({pairId}) => {
    createPage({
      path: `pair/${pairId}`,
      component: templatePath,
      context: {
        slug: pairId,
        id: pairId,
      },
    })
  })
}