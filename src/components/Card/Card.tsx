import { Badge, Box, Image, Text } from '@chakra-ui/core';
import React from 'react';
import { BsPeople } from "react-icons/bs";
import { FaBed } from "react-icons/fa"
import {Hotel} from "../../model/Hotel";
import {Link} from "gatsby";

interface IProps extends Hotel { }

const Card: React.FC<IProps> = (props: IProps) => {

  return (
    <>
      <Box maxW="lg" borderWidth="1px" rounded="lg" overflow="hidden" m={{ base: 6, sm: 2, xs: 2 }} float={{ base: "none", xl: "left" }} fontFamily="Nunito">
        <Link to={`/${props.citySlug}/${props.hotelId}/`}>
          <Image src={props.photo}/>
        </Link>
        <Box p={6}>
          <Box d="flex" alignItems={{ base: "baseline" }} justifyContent={{ xl: "center" }}>
            <Badge rounded="full" px={2} variantColor="teal">
              {props.type}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="bold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml={2}
            >
              {props.street},&nbsp;
              {props.cityName}
            </Box>
          </Box>
          <Box d={{ base: "flex", xl: "none" }} mt={1} fontWeight="bold" as="h4" lineHeight="tight" isTruncated>
            <Link to={`/${props.citySlug}/${props.hotelId}/`}>{props.name}</Link>
          </Box>
          <Box d={{ base: "flex", xl: "none" }}>
            {new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(props.priceMin)}
            <Box as="span" color="gray.600" fontSize="sm" alignSelf="center">
              / 24h
          </Box>
          </Box>
        </Box>
      </Box>
      <Box p={6} d={{ base: "none", xl: "inline-block" }} float="left" mt={6}>
        <Box d="flex">
          <Badge fontSize="md" rounded="full" px={4} variantColor="teal" lineHeight="2rem" mr={2} maxHeight={36}>
            {props.type}
          </Badge>
          <Badge fontSize="md" rounded="full" px={4} variantColor="green" lineHeight="2rem" mr={2} maxHeight={36}>
            <Box as={BsPeople} d="inline-block" size="2rem" /> {props.places}
          </Badge>
          <Link to={`/${props.citySlug}/${props.hotelId}/`}>
            <Text fontSize="2xl" fontWeight="bold">{props.name}</Text>
          </Link>
        </Box>
        <Box py={4}>
          <Text >Cena: </Text>
          <Text fontSize="xl" fontWeight="700">{new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(props.priceMin)}
            <Box as="span" color="gray.600" fontSize="md" fontWeight="normal">
              / 24h
          </Box>
          </Text>
        </Box>
        <Box>
          <Box d="flex">
            <Box as={FaBed} d="inline-block" size="3rem" mr={4} />
            <Box d="inline-block" alignItems="center">
              <Text>
                {props.places ? props.places > 1 ? `${props.places} miejsc` : `${props.places} miejsce` : `Brak informacji`}
              </Text>
              <Text>{props.street}</Text>
              <Text>{props.cityName}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>)
}

export default Card
