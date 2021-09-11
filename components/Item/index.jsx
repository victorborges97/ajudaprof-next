/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Box, Container, Heading, Text } from "@chakra-ui/react"

const Item = ({ titulo = "", height = "100vh", maxW = "80rem", bgColor = "white", children }) => {
  return (
    <Container
      maxW={maxW}
      centerContent
      minH={height}
      m="0px"
      p="14"
      bg={bgColor}
    >
      <Box fontSize="26px" lineHeight="34px" color="#242424" fontWeight="bold" >{titulo}</Box>
      <Box height="100%" w="100%" centerContent>
        {children}
      </Box>
    </Container>
  )
}

export default Item;