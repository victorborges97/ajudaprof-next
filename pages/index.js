import { Container, SimpleGrid } from '@chakra-ui/layout'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Item from '../components/Item'
import styles from '../styles/Home.module.css'

export default function Home() {
    const dataList = [
        {
            id: "1",
            product: "Product 1",
            summary: "This is a summary, can be any length",
            longLine: "Very short, can be any description"
        },
        {
            id: "2",
            product: "Product Two",
            summary:
                "Another summary, make sure that this is very responsivesfafsdfsdfsdfsdfsfsfsdf",
            longLine: "Billy Bob Bob Bob Bob likes Markiplier gameplay videos"
        },
        {
            id: "3",
            product: "Long Product",
            summary: "Finalize them summary, hurry, we are close to deadline",
            longLine: "Wow, this is very descriptive! I wonder how long it is"
        }
    ];

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Item maxW="full" titulo="Como ensino remotamente com videochamadas?">
                <SimpleGrid margin="0 auto" minChildWidth="255px">
                    {dataList.map(function (data) {
                        const { id, product, summary, longLine } = data;
                        return (
                            <Card
                                key={id}
                                product={product}
                                summary={summary}
                                longLine={longLine}
                            />
                        );
                    })}
                </SimpleGrid>
            </Item>
            <Item maxW="full" titulo="Como ensino remotamente com videochamadas?">
                <SimpleGrid minChildWidth="255px">
                    {dataList.map(function (data) {
                        const { id, product, summary, longLine } = data;
                        return (
                            <Card
                                key={id}
                                product={product}
                                summary={summary}
                                longLine={longLine}
                            />
                        );
                    })}
                </SimpleGrid>
            </Item>
        </div>
    )
}
