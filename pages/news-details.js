import Head from "next/head";
import BlogDetails from "../components/Blog/BlogDetails";
import PageBanner from "../components/Common/PageBanner";

export default function newsDetails() {
	return (
		<>
			<Head>
				<title>Rider - Blog Read</title>
			</Head>
			<PageBanner
				title="Rider Application: Transforming Lives, One Journey at a Time"
				content="In the fast-paced world we live in, where every minute counts, the Rider application emerges as a game-changer, reshaping the way we navigate our daily lives. More than just a ride-hailing platform, Rider is a transformative force that goes beyond the mere act of transportation, leaving an indelible mark on the lives of its users."
			/>
			<BlogDetails />
		</>
	);
}
