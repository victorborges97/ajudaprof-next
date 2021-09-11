import React from "react";
import {
    Box,
    Flex,
    AspectRatio,
    Image,
    Text,
    Link,
    Button,
    Stack
} from "@chakra-ui/react";

function Card(props) {
    const { product, summary, longLine, link } = props;

    return (
        <Box
            p={4}
            maxWidth="255px"
            borderWidth={1}
            borderRadius="8px"
            margin={2}
        >
            <AspectRatio ratio={1 / 1}>
                <Image
                    maxWidth="200px"
                    margin="auto"
                    src="https://picsum.photos/id/237/250/250"
                    alt="Woman paying for a purchase"
                />
            </AspectRatio>
            <Stack
                align="center"
                textAlign="center"
                mt="4"
                ml={{ md: 6 }}
            >
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="lg"
                    letterSpacing="wide"
                    color="teal.600"
                >
                    {product}
                </Text>
                <Link
                    my={1}
                    display="block"
                    fontSize="md"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="#"
                >
                    {summary}
                </Link>
                <Text my={2} color="gray.500">
                    {longLine}
                </Text>
                {
                    link && (
                        <Button maxWidth="100px" my={2}>
                            Click me!
                        </Button>
                    )
                }
            </Stack>
        </Box>
    );
}

export default Card;
