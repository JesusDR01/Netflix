import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { GlobalStyles } from "src/GlobalStyles";
import Nav from "../components/Nav";

const Home: NextPage = () => {
    return (
        <>
        <GlobalStyles/>
            <Head>
                <title>Netflix Demo JesusDR</title>
            </Head>

            <div className="container">
                <Nav />
                <main className="main">
                </main>
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = () => ({
    props: {},
});

export default Home;
