import Head from "next/head";
import Career from "../components/Career/Career";
import PageBanner from "../components/Common/PageBanner";

export default function News() {
	return (
		<>
			<Head>
				<title>Career</title>
			</Head>
			<PageBanner
				title="Explore Opportunities"
				content="What’s destination next? Is it better technology? A better you? Or a better community of makers? Wherever you desire to go, we give you the tools, the techniques, and the teams to navigate the journey. So you’re inspired to build what’s next, ensure your career never stands still, and navigate further together."
			/>
			<Career />
		</>
	);
}
