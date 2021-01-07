import React from "react";
import {Box, Grid, Heading, Text} from "@chakra-ui/core";
import {City} from "../../model/City";
import {Link} from "gatsby";

interface IProps {
    cities: City[],
    selectedCitySlug?: string | null
}

const CitiesList: React.FC<IProps> = (props: IProps) => {
    // @ts-ignore
    return <Grid templateColumns={ {"sm": null, "md": "repeat(6, 1fr)"}} gap={6}>
        { props.cities.map((city, i) => {
         const color=city.slug===props.selectedCitySlug ? "green" : "gray";
        return <Box key={i} w="100%" h="10" bg={`${color}.500`} display={"flex"} justifyContent={"center"}>
            <Heading as="h4" size="md" color={"white"} display={"flex"} justifyItems={"center"}>
                <Link to={`/${city.slug}/`} style={{display: "flex", placeItems: "center"}}>{ city.name }</Link>
            </Heading>
        </Box> } )}
    </Grid>
}

export default CitiesList;