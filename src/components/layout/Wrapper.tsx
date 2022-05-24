import { Box } from "@chakra-ui/react";
import React from "react";

type WrapperVariant = "small" | "regular";

interface WrapperProps {
    variant: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, variant }) => {
    return (
        <Box
            mt={[4, 8, 8]}
            mx="auto"
            maxW={variant === "regular" ? "900px" : "500px"}
            maxH="650px"
            w={["90%", "90%", "100%"]}
            shadow="4px 4px 20px #bababa"
            borderRadius={10}
            overflow="scroll"
        >
            <Box p={[6, 6, 8]} pt={6}>
                {children}
            </Box>
        </Box>
    );
};
