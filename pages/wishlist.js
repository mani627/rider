import Head from "next/head";
import CallToAction from "../components/Common/CallToAction";
import PageBanner from "../components/Common/PageBanner";

const WishList = () => {
    return(
        <>
        <Head>
            <title>READY TO USE RIDER APP?</title>
        </Head>
        <PageBanner
            title="READY TO USE RIDER APP?"
            content="Sign in to join the waitlist"
        />
        <CallToAction />
    </>
    )
}


export default WishList;