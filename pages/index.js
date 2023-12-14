import Head from "next/head";
import HeroThree from "../components/Hero/HeroThree";
import ContentBlockOne from "../components/HomeThree/ContentBlockOne";
import ContentBlockThree from "../components/HomeThree/ContentBlockThree";
import Cta from "../components/HomeThree/Cta";
import PricingContentTwo from "../components/Pricing/PricingContentTwo";
import FeaturesFour from "../components/Features/FeaturesFour";
import TestimonialTwo from "../components/Testimonial/TestimonialTwo";
import Video from "../components/Video";
import Counter from "../components/Counter";
import TheRider from "../components/TheRider";

export default function indexThree() {
	return (
		<>
			<Head>
				<title>Rider | Find nearby cabs at the best rates and book taxis online conveniently with RIDER</title>
			</Head>

			<HeroThree />
			<FeaturesFour />
			<Cta />
			{/* <Video/> */}
			<TheRider/>
			{/* <Gallery/> */}
			<Counter/>
			<ContentBlockOne />
			<ContentBlockThree />
			<PricingContentTwo />
			<TestimonialTwo />
		</>
	);
}
