import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { GlobalStyles } from "src/GlobalStyles";
import Main from "src/components/Main";
import Footer from "src/components/Footer";
import Billboard from "src/components/Billboard";
import MobileNav from "src/components/MobileNav";
import DesktopNav from "src/components/DesktopNav";
const Home: NextPage = () => {
    return (
        <>
            <GlobalStyles />
            <Head>
                <title>Netflix Demo JesusDR</title>
            </Head>
            <div className="container">
                <MobileNav />
                <DesktopNav />
                <Billboard />
                <Main />
                <Footer />
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = () => ({
    props: {},
});

export default Home;
