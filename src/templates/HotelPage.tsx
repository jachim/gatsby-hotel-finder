import React from "react";
import Layout from "./Layout";
import CitiesList from "../components/CitiesList/CitiesList";
import List from "../components/List/List";
import {graphql} from "gatsby";
import {Heading} from "@chakra-ui/core";
import {City} from "../model/City";
import {Hotel} from "../model/Hotel";
import Card from "../components/Card/Card";

interface IProps {
    data: any,
    pageContext: any
}

export default function CityPage(props: IProps) {
    console.log(props);
    const selectedCity = props.data.allCity.nodes.find((city : City) => city.slug==props.pageContext.citySlug);
    const selectedHotel = props.data.allHotel.nodes.find((hotel : Hotel) => hotel.hotelId==props.pageContext.hotelId);
    return <Layout>
        <CitiesList cities={props.data.allCity.nodes} selectedCitySlug={selectedCity.slug}/>
        <Heading margin={5}>{ selectedHotel.name }</Heading>
        <Card { ...selectedHotel }/>
    </Layout>
}

export const query = graphql`
  query($hotelId: String!) {
    allHotel(filter: {hotelId: {eq: $hotelId}}) {
    nodes {
      hotelId
      cityName
      citySlug
      name
      photo
      places
      priceMin
      street
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