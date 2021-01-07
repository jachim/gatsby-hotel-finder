import React from "react";
import Layout from "./Layout";
import CitiesList from "../components/CitiesList/CitiesList";
import List from "../components/List/List";
import {graphql} from "gatsby";
import {Heading} from "@chakra-ui/core";
import {City} from "../model/City";

interface IProps {
    data: any,
    pageContext: any
}

export default function CityPage(props: IProps) {
    console.log(props);
    const selectedCity = props.data.allCity.nodes.find((city : City) => city.slug==props.pageContext.slug);
    return <Layout>
        <CitiesList cities={props.data.allCity.nodes} selectedCitySlug={selectedCity.slug}/>
        <Heading margin={5}>Hotels in { selectedCity.name }</Heading>
        <List data={props.data.allHotel.nodes} />
    </Layout>
}

export const query = graphql`
  query($slug: String!) {
    allHotel(filter: {citySlug: {eq: $slug}}) {
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