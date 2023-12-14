import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";
import TermsConditions from "../components/TermsConditions";

export default function termsAndConditions() {
	return (
		<>
			<Head>
				<title>Terms and Conditions</title>
			</Head>
			<PageBanner
				title="Terms and Conditions"
				content="Rider, a cab hailing application connecting riders with independent third-party drivers."
			/>
            <TermsConditions/>
		</>
	);
}
