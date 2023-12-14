import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";
import ErrorContent from "../components/Error/ErrorContent";

export default function NotFound() {
	return (
		<>
			<Head>
				<title>On Development</title>
			</Head>
			<PageBanner
				title="Under Construction"
				content="Rider Tech Team is developing..."
			/>
			{/* <ErrorContent /> */}
		</>
	);
}
