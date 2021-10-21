import type {GetServerSideProps, NextPage} from 'next'
import {Button, Divider, Stack} from "@mui/material";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage<{ id: number }> = ({id}) => {
    return (
        <Stack aria-label={"test section"}>
            <Head>
                <title>Title Test 123</title>
                <meta
                    name={"viewport"}
                    content={"initial-scale=1.0, width=device-width"}
                />
                <meta
                    property={"og:title"}
                    content={"my page title"}
                    key={"title"}
                />
            </Head>
            <Divider/>

            <Link href={`/detail?id=${id}`}>
                <Button variant={"outlined"}>
                    {id}
                </Button>
            </Link>
        </Stack>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    console.log("server?")
    return {
        props: {"id": 8}
    }
}

export default Home
