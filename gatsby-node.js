require('ts-node').register({files: true})
const { ApiService } = require("./src/api/ApiService");
const { GatsbyNodeGenerator } = require("./gatsby-node-generator");
const path = require(`path`)


exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  const generator = new GatsbyNodeGenerator();
  const cities=await ApiService.fetchAllCities();
  generator.generateCityNodes(cities).forEach((node) => createNode(node));
  const hotels=await ApiService.fetchAllHotels();
  generator.generateHotelNodes(hotels).forEach((node) => createNode(node));
}

exports.createPages = async ({ graphql, actions }) => {
  const {createPage} = actions
  const result = await graphql(`
    query {
      allCity {
        edges {
          node {
            slug
          }
        }
      },
      allHotel {
        edges {
          node {
            hotelId
            citySlug
          }
        }
      }
    }
  `)
  result.data.allCity.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/CityPage.tsx`),
      context: {
        slug: node.slug,
      },
    })
  })

  result.data.allHotel.edges.forEach(({ node }) => {
    createPage({
      path: node.citySlug+"/"+node.hotelId,
      component: path.resolve(`./src/templates/HotelPage.tsx`),
      context: {
        hotelId: node.hotelId,
        citySlug: node.citySlug
      },
    })
  })
}