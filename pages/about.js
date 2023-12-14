import Head from "next/head";
import ContentOne from "../components/AboutPage/ContentOne";
import CallToAction from "../components/Common/CallToAction";
import PageBanner from "../components/Common/PageBanner";
import FeaturesThree from "../components/Features/FeaturesThree";
import TeamTwo from "../components/Team/TeamTwo";
import Testimonial from "../components/Testimonial/Testimonial";
import ContentTwo from "./../components/AboutPage/ContentTwo";

export default function about() {
	return (
		<>
			<Head>
				<title>Team</title>
			</Head>
			<PageBanner
				title="About Us"
				content="The Rider Team is a dynamic and dedicated group of professionals committed to redefining the ride-hailing experience. With a passion for innovation and a focus on customer satisfaction, our diverse team collaborates seamlessly to ensure that every journey with Rider is safe, comfortable, and exceeds expectations."
			/>
			<ContentTwo />
			<TeamTwo />
		</>
	);
}
