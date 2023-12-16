import Head from "next/head";
import ContactContent from "../components/Contact/ContactContent";
import PageBanner from "./../components/Common/PageBanner";

export default function Support() {
	return (
		<>
			<Head>
				<title>Support Page</title>
			</Head>
			<PageBanner
				title="Why Support Us"
				content="At Rider, we believe in safety and comfort. By supporting us, you contribute to our organization to grow!"
			/>
			<ContactContent page={"support"}/>
		</>
	);
}