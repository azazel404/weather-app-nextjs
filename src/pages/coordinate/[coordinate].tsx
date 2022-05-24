import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { ResultWeather } from "../../modules/ResultWeather";
import { Wrapper } from "../../components/layout/Wrapper";
import { FetchData } from "../../interfaces";

const coord = ({ data }: { data: FetchData }) => {
    const router = useRouter();

    return (
        <Wrapper variant="regular">
            <Button
                leftIcon={<ArrowLeftIcon boxSize="0.8em" />}
                onClick={() => {
                    router.back();
                }}
            >
                back
            </Button>
            {/* <Header /> */}
            <ResultWeather data={data} />
        </Wrapper>
    );
};

export default coord;

export async function getServerSideProps({ params }) {
    const co = params.coordinate;
    const coordinate = co.split("&");
    const req = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate[0]}&lon=${coordinate[1]}&units=imperial&exclude=minutely,hourly&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
        { method: "GET" }
    );
    const data: FetchData = await req.json();

    return {
        props: { data },
    };
}
