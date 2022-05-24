
import React, { useEffect, useState } from "react";
import { Box, Button, HStack, Image, Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { ResultWeather } from "../modules/ResultWeather";
import { Wrapper } from "../components/layout/Wrapper";
import { FetchData } from "../interfaces";

const Index = (props: any) => {
    const router = useRouter();
    const [location, setLocation] = useState({});


    useEffect(() => {
        // let ip = "103.176.95.62";
        // fetch('https://ipapi.co/' + ip + '/json/')
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (data) {
        //         console.log(data);
        //         let latitude = data.latitude
        //         let longitude = data.longitude
        //         router.push(`/?lat=${latitude}&lon=${longitude}`)
        //     });
        fetch(' https://ipapi.co/json/')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setLocation(data);
                let latitude = data.latitude
                let longitude = data.longitude
                router.push(`/?lat=${latitude}&lon=${longitude}`)
            });
    }, [])


    // const getCurrentLocationData = () => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(position => {
    //             let latitude = position.coords.latitude
    //             let longitude = position.coords.longitude
    //             router.push(`/?lat=${latitude}&lon=${longitude}`)
    //         })
    //     }
    // }
    // useEffect(() => {
    //     getCurrentLocationData()
    // }, [])

    const { data } = props;
    return (
        <Wrapper variant="regular">
            <Flex justify="space-between" align="center">
                <Heading style={{ marginBottom: '12px' }}>Current Weather</Heading>
                <div>
                    <Button
                        shadow="md"
                        colorScheme="facebook"
                        style={{ marginRight: '12px' }}
                        onClick={() => router.push("/address")}
                    >
                        Search By IP Address
                    </Button>
                    <Button
                        shadow="md"
                        colorScheme="facebook"
                        variant='outline'
                        onClick={() => router.push("/city")}
                    >
                        Search By City Name
                    </Button>
                </div>
            </Flex>
            {data.cod !== '400' && <ResultWeather data={data} location={location} />}
        </Wrapper>
    );
};

export async function getServerSideProps(context) {
    const {
        locale,
        query: {
            lat,
            lon,
        },
    } = context;
    const latitude = lat;
    const longitude = lon;
    const req = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely,hourly&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
        { method: "GET" }
    );
    const data: FetchData = await req.json();

    return {
        props: { data },
    };
}

export default Index;
