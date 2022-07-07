import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import HomeCar from "../../public/images/home_car.png";
import Nav from "../components/Nav";

const Home: NextPage = () => {
    return (
        <>
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
