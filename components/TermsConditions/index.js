import Link from "next/link";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { ImFacebook, ImInstagram, ImPinterest, ImTwitter } from "react-icons/im";
export default function TermsConditions() {
	return (
		<div className="blog-details-wrapper section-padding mtm-30">
			<div className="container">
				<div className="row">
					<div className="col-xl-12 col-12 pe-xl-5">
						<div className="blog-content">

							<div className="post-meta d-flex">
								<div className="post-cat">
									<Link href="/news">
										<a>Terms and Conditions</a>
									</Link>
								</div>
								<div className="post-date">
									<span>Rider Application</span>
								</div>
							</div>

							<h3 className="pt-md-4">
							Welcome to "Rider," a cab hailing application connecting riders with independent third-party drivers. By downloading, installing, or using the Rider application, you agree to comply with and be bound by the following terms and conditions. Please read the following carefully before accessing or using our services.{" "}
							</h3>
							<p className="mt-4">
							1. Acceptance of Terms

By downloading, installing, or using the Rider application, you agree to these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
							</p>
							<p className="mt-4 mb-4">
							2. Rider Responsibilities

a. Eligibility: Users must be at least 18 years old to use the Rider application. By using the app, you confirm that you meet this age requirement.

b. Account Information: You are responsible for maintaining the confidentiality of your account information, including your username and password. Any use of your account is your responsibility, and you should immediately notify us of any unauthorized use.

c. Payment: Riders agree to pay the fare for the transportation services as displayed in the Rider app. This includes any additional charges such as tolls or surcharges. Payment may be processed through the app using the designated payment method.

d. Behavioral Conduct: Riders must behave respectfully towards drivers and other users. Any form of harassment, discrimination, or abusive behavior is strictly prohibited and may result in the suspension or termination of your account.
							</p>

							<h4>Booking and Cancellation</h4>
							<p className="mt-4">
							a. Booking: Riders can request transportation services through the Rider app. The app will provide information about the assigned driver and estimated time of arrival.

b. Cancellation: Riders may cancel a booking within a reasonable time frame. However, frequent and unjustified cancellations may result in restrictions on your account.
							</p>
							<p className="mt-4">
							4. Safety and Security

a. Rider Safety: Riders should prioritize their safety by verifying the driver's identity and confirming the vehicle details before boarding. If there are concerns about safety, riders should contact local authorities.

b. Feedback: Riders are encouraged to provide feedback on their experience with drivers through the Rider app. This helps maintain a high level of service quality.
							</p>
						

							<h5> Privacy Policy</h5>
							<ul>
								<li>
								a. Data Collection: The Rider application collects and processes personal data as outlined in the Privacy Policy. By using the app, you consent to the collection and use of your data as described in the Privacy Policy.
								</li>
								<li>
								Changes to Terms

We reserve the right to update or modify these Terms and Conditions at any time without prior notice. It is your responsibility to review these terms periodically for changes.
								</li>
								
							</ul>
						</div>

					
					
						
					</div>
					
				</div>
			</div>
		</div>
	);
}
