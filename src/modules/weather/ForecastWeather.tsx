import { Table, TableCaption, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { FetchData } from "../../interfaces";
import { RowWeather } from "./RowWeather";

interface ForecastWeatherProps {
    data: FetchData;

}

export const ForecastWeather: React.FC<ForecastWeatherProps> = ({
    data,

}) => {
    return (
        <>
            <Table variant="simple" mt={4} size="sm">

                <Thead>
                    <Tr>
                        <Th>Day</Th>
                        <Th>Temp(max) ℉/°C</Th>
                        <Th>Temp(min) ℉/°C</Th>
                        <Th>Weather</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.daily.map((d) => {
                        return <RowWeather key={d.dt} daily={d} />;
                    })}
                </Tbody>
            </Table>
        </>
    );
};
