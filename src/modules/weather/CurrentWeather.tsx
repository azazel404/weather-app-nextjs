import {
    HStack,
    VStack,
    Box,
    Stat,
    StatNumber,
    StatHelpText,
    Image,
    Flex,
} from "@chakra-ui/react";
import React from "react";
import { FetchData } from "../../interfaces";
import { unixToTime, unixToDay, unixToDate } from "../../utils/date";
import { fahToCel } from "../../utils/temp";

interface currentWeatherProps {
    data: FetchData;
    location: any;
}

export const CurrentWeather: React.FC<currentWeatherProps> = ({ data, location }) => {
    console.log("Location", location)
    return (
        <>
            {data && <>
                <HStack>
                    <Flex align="center" key={data.current.weather[0].id}>
                        <Box>
                            <Image
                                src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
                                alt="Weather icon"
                            />
                        </Box>
                        <VStack>
                            <Box fontWeight="bold" fontSize="lg">
                                {data.current.weather[0].main}
                            </Box>
                            <Box fontSize="sm">
                                {data.current.weather[0].description}
                            </Box>
                        </VStack>
                    </Flex>
                </HStack>
                <Box >
                    <Flex mt={4}
                    >
                        <Stat>
                            <StatHelpText>Country Capital</StatHelpText>
                            <StatNumber fontSize="sm">
                                {location && location.country_capital}
                            </StatNumber>
                        </Stat>
                        <Stat>
                            <StatHelpText>city</StatHelpText>
                            <StatNumber fontSize="sm">
                                {location && location.city}
                            </StatNumber>
                        </Stat>
                        <Stat>
                            <StatHelpText>IP Address</StatHelpText>
                            <StatNumber fontSize="sm">
                                {location && location.ip}
                            </StatNumber>
                        </Stat>
                        <Stat>
                            <StatHelpText>current temperature</StatHelpText>
                            <StatNumber fontSize="sm">
                                {data.current.temp} ℉ / {fahToCel(data.current.temp)} °C
                            </StatNumber>
                        </Stat>
                        <Stat>
                            <HStack>
                                <StatHelpText >
                                    {unixToDay(data.current.dt)}, {unixToDate(data.current.dt)}
                                </StatHelpText>
                            </HStack>
                            <StatNumber fontSize="sm">{unixToTime(data.current.dt)}</StatNumber>

                        </Stat>
                    </Flex>
                    <Flex mt={4}>
                        <Stat>
                            <StatNumber fontSize="sm">{data.current.clouds}%</StatNumber>
                            <StatHelpText >cloudiness</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatNumber fontSize="sm">{data.current.clouds}%</StatNumber>
                            <StatHelpText >cloudiness</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatNumber fontSize="sm">{data.current.humidity}%</StatNumber>
                            <StatHelpText >humidity</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatNumber fontSize="sm">
                                {unixToTime(data.current.sunrise)}
                            </StatNumber>
                            <StatHelpText >sunrise</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatNumber fontSize="sm">
                                {unixToTime(data.current.sunset)}
                            </StatNumber>
                            <StatHelpText >sunset</StatHelpText>
                        </Stat>
                    </Flex>
                </Box>
            </>}
        </>
    );
};
