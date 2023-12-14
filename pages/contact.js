import Head from "next/head";
import ContactContent from "../components/Contact/ContactContent";
import PageBanner from "./../components/Common/PageBanner";

export default function contact() {
	return (
		<>
			<Head>
				<title>Contact Page</title>
			</Head>
			<PageBanner
				title="Contact Us"
				content="Need assistance or have a question about Rider? Our dedicated support team is ready to help! Reach out to us through our contact page, and we'll ensure a swift response to make your Rider experience as smooth as your journeys with us."
			/>
			<ContactContent />
		</>
	);
}
