import { Box, Flex, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { FetchData } from "../interfaces";
import { CurrentWeather } from "./weather/CurrentWeather";
import { ForecastWeather } from "./weather/ForecastWeather";

interface ResultProps {
    data: FetchData;
    location?: any;
}

export const ResultWeather: React.FC<ResultProps> = ({ data, location }) => {



    return (
        <Box>
            <Box>
                <Flex>

                </Flex>
                <Box w="100%" ml={4}>
                    <CurrentWeather data={data} location={location} />
                </Box>
                <Box
                    mt={2}
                    fontSize="sm"
                    color="gray.500"
                    p={2}
                >
                    Daily forecast
                </Box>
                <div style={{ height: '200px', overflow: 'scroll' }}>
                    <ForecastWeather data={data} />
                </div>
            </Box>
        </Box>
    );
};
