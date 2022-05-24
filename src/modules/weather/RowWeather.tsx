import { ViewIcon } from "@chakra-ui/icons";
import { Tr, Td, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { Daily } from "../../interfaces";
import { unixToTableDate } from "../../utils/date";
import { fahToCel } from "../../utils/temp";
import { Detail } from "../resultWeatherModal/Detail";

interface RowProps {
    daily: Daily;

}

export const RowWeather: React.FC<RowProps> = ({ daily }) => {
    const [showDetail, setShowDetail] = useState<boolean>(false);

    const onClickToggleDetail = () => {
        setShowDetail(!showDetail);
    };

    return (
        <Tr>
            <Td fontSize={["xs", "xs", "sm"]}>{unixToTableDate(daily.dt)}</Td>
            <Td fontSize={["xs", "xs", "sm"]}>
                {daily.temp.max} / {fahToCel(daily.temp.max)}
            </Td>
            <Td fontSize={["xs", "xs", "sm"]}>
                {daily.temp.min} / {fahToCel(daily.temp.min)}
            </Td>
            <Td>
                <IconButton
                    size="xs"
                    aria-label="Search database"
                    icon={<ViewIcon />}
                    onClick={onClickToggleDetail}
                />
                <Detail
                    dailyData={daily}
                    isOpen={showDetail}
                    onClickToggle={onClickToggleDetail}
                />
            </Td>
        </Tr>
    );
};
