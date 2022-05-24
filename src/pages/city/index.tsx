import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/dist/client/router";
import { InputField } from "../../components/input/InputField";
import { Wrapper } from "../../components/layout/Wrapper";
import { DataType } from "../../interfaces";

interface indexProps { }

export const index: React.FC<indexProps> = ({ }) => {
    const router = useRouter();
    const [data, setData] = useState<DataType>(null)

    const handleSeach = async (cityName) => {
        const req = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
            { method: "GET" }
        );
        const result: DataType = await req.json();

        setData(result)
    }

    return (
        <Wrapper variant="regular">
            <Box>
                <Formik
                    initialValues={{ cityName: "" }}
                    onSubmit={async ({ cityName }) => {
                        handleSeach(cityName)
                    }}
                >
                    <Form>
                        <Button
                            shadow="md"
                            leftIcon={<ArrowLeftIcon boxSize="0.8em" />}
                            onClick={() => {
                                router.back();
                            }}
                        >
                            back
                        </Button>
                        <HStack mt={8} spacing={4} align='center'>
                            <InputField
                                name="cityName"
                                label="city name"
                                placeholder="city name"
                                isRequired={true}
                            />
                            <div>
                                <Button
                                    mt={5}
                                    leftIcon={<SearchIcon boxSize="0.8em" />}
                                    shadow="md"
                                    variant='outline'
                                    type="submit"
                                    colorScheme="facebook"
                                >
                                    search
                                </Button>
                            </div>
                        </HStack>
                    </Form>
                </Formik>
            </Box>
            <div>
                {data && data.cod !== "404" ? (
                    <Box>
                        <Text fontSize='xl' mb="4">Search result :</Text>
                        <VStack>
                            <Button
                                style={{ width: '100%' }}
                                colorScheme="facebook"
                                variant='outline'
                                onClick={() => {
                                    router.push(`/coordinate/${data.coord.lat}&${data.coord.lon}`);
                                }}
                            >
                                {data && data.name}, {data && data.sys.country}
                            </Button>
                        </VStack>
                    </Box>
                ) : (
                    <Box color="tomato" fontWeight="bold">
                        {data && data.message}
                    </Box>
                )
                }
            </div>
        </Wrapper>
    );
};

export default index;
