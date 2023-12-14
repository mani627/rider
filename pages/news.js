import Head from "next/head";
import Blog from "../components/Blog/Blog";
import PageBanner from "../components/Common/PageBanner";

export default function News() {
	return (
		<>
			<Head>
				<title>Blogs</title>
			</Head>
			<PageBanner
				title="Rider's Articles"
				content="A Explore the latest insights, updates, and trends in the world of transportation with our Rider Article Section. From groundbreaking innovations to expert tips, embark on a journey through informative articles that redefine the ride-hailing experience for both drivers and passengers alike."
			/>
			<Blog />
		</>
	);
}
