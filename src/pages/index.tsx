import List from '../components/List/List';
import React from 'react';
import CitiesList from "../components/CitiesList/CitiesList";
import {graphql} from "gatsby";
import Layout from "../templates/Layout";
import {Heading} from "@chakra-ui/core";

interface IProps {
    data: any
}

export default function Home(props: IProps) {
  // console.log(props.data);
  return (
      <Layout>
          <CitiesList cities={props.data.allCity.nodes}/>
          <Heading margin={5}>Popular hotels</Heading>
          <List data={props.data.allHotel.nodes} />
      </Layout>

  )
}

export const query = graphql`
  query {
    allHotel(limit: 10) {
    nodes {
      hotelId
      cityName
      citySlug
      name
      photo
      places
      priceMin
      street
      type
    }
  },
  allCity {
    nodes {
      cityId
      name
      slug
    }
  }
  }
`
