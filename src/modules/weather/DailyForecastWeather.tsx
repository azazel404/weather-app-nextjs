import {
    Box,
    Flex,
    HStack,
    Image,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
} from "@chakra-ui/react";
import React from "react";
import { Daily } from "../../interfaces";
import { unixToDate, unixToDay, unixToTime } from "../../utils/date";
import { fahToCel } from "../../utils/temp";

interface DailyForecastWeatherProps {
    dailyData: Daily;
}

export const DailyForecastWeather: React.FC<DailyForecastWeatherProps> = ({
    dailyData,
}) => {
    return (
        <>
            <Flex align="center">
                <Box>
                    <Image
                        src={`http://openweathermap.org/img/wn/${dailyData.weather[0].icon}@2x.png`}
                        alt="Weather icon"
                    />
                </Box>
                <Flex direction="column">
                    <Box fontWeight="bold" fontSize="lg">
                        {dailyData.weather[0].main}
                    </Box>
                    <Box fontStyle="italic" fontSize="sm">
                        {dailyData.weather[0].description}
                    </Box>
                </Flex>
            </Flex>
            <Box>
                <Stat >
                    <StatLabel fontSize="sm">Time of the forecasted data</StatLabel>
                    <StatNumber>{unixToTime(dailyData.dt)}</StatNumber>
                    <HStack>
                        <StatHelpText fontStyle="italic">
                            {unixToDay(dailyData.dt)}, {unixToDate(dailyData.dt)}
                        </StatHelpText>
                    </HStack>
                </Stat>
                <Flex>
                    <Stat >
                        <StatNumber fontSize="md">
                            {dailyData.temp.max} ℉ / {fahToCel(dailyData.temp.max)} °C
                        </StatNumber>
                        <StatHelpText fontStyle="italic">maximum</StatHelpText>
                    </Stat>
                    <Stat >
                        <StatNumber fontSize="md">
                            {dailyData.temp.min} ℉ / {fahToCel(dailyData.temp.min)} °C
                        </StatNumber>
                        <StatHelpText fontStyle="italic">minimum</StatHelpText>
                    </Stat>
                </Flex>
                <Flex>
                    <Stat >
                        <StatNumber fontSize="md">
                            {dailyData.temp.morn} ℉ / {fahToCel(dailyData.temp.morn)} °C
                        </StatNumber>
                        <StatHelpText fontStyle="italic">morning</StatHelpText>
                    </Stat>
                    <Stat >
                        <StatNumber fontSize="md">
                            {dailyData.temp.day} ℉ / {fahToCel(dailyData.temp.day)} °C
                        </StatNumber>
                        <StatHelpText fontStyle="italic">day</StatHelpText>
                    </Stat>
                </Flex>
                <Flex>
                    <Stat >
                        <StatNumber fontSize="md">
                            {dailyData.temp.eve} ℉ / {fahToCel(dailyData.temp.eve)} °C
                        </StatNumber>
                        <StatHelpText fontStyle="italic">evening</StatHelpText>
                    </Stat>
                    <Stat >
                        <StatNumber fontSize="md">
                            {dailyData.temp.night} ℉ / {fahToCel(dailyData.temp.night)} °C
                        </StatNumber>
                        <StatHelpText fontStyle="italic">night</StatHelpText>
                    </Stat>
                </Flex>
                <Flex>
                    <Stat>
                        <StatNumber fontSize="md">{dailyData.clouds}%</StatNumber>
                        <StatHelpText fontStyle="italic">cloudiness</StatHelpText>
                    </Stat>
                    <Stat>
                        <StatNumber fontSize="md">{dailyData.humidity}%</StatNumber>
                        <StatHelpText fontStyle="italic">humidity</StatHelpText>
                    </Stat>
                    <Stat>
                        <StatNumber fontSize="sm">{dailyData.pressure} hPa</StatNumber>
                        <StatHelpText fontStyle="italic">atmospheric pressure</StatHelpText>
                    </Stat>
                </Flex>
                <Flex>
                    <Stat>
                        <StatNumber fontSize="md">
                            {unixToTime(dailyData.sunrise)}
                        </StatNumber>
                        <StatHelpText fontStyle="italic">sunrise</StatHelpText>
                    </Stat>
                    <Stat>
                        <StatNumber fontSize="md">
                            {unixToTime(dailyData.sunset)}
                        </StatNumber>
                        <StatHelpText fontStyle="italic">sunset</StatHelpText>
                    </Stat>
                    <Stat>
                        <StatNumber fontSize="md">
                            {unixToTime(dailyData.moonrise)}
                        </StatNumber>
                        <StatHelpText fontStyle="italic">moonrise</StatHelpText>
                    </Stat>
                    <Stat>
                        <StatNumber fontSize="md">
                            {unixToTime(dailyData.moonset)}
                        </StatNumber>
                        <StatHelpText fontStyle="italic">moonset</StatHelpText>
                    </Stat>
                </Flex>

            </Box>
        </>
    );
};
