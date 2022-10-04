import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Main from "src/components/Main";
import Footer from "src/components/Footer";
import Billboard from "src/components/Billboard";
import MobileNav from "src/components/MobileNav";
import DesktopNav from "src/components/DesktopNav";
import InfoModal from "src/components/InfoModal";
const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Netflix Demo JesusDR</title>
            </Head>
            <div className="container">
                <InfoModal />
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
