import PricingTwo from "./PricingTwo";

const pricingData = [
	{
		id: 1,
		plan: "Bike",
		price: 15,
		features: ["Fast Rider in Traffic", "Best for Single Rider", "No Extra Charges", "Standard support"],
		popular: false,
	},
	{
		id: 2,
		plan: "Mini",
		price: 35,
		features: ["Fast & Comfy", "Best for 2 - 4 Rider", "No Extra Charges", "Night Ride & 24/7 Support"],
		popular: true,
	},
	{
		id: 3,
		plan: "Intercity ",
		price: 42,
		features: [
			"Safe & Comfy",
			"Multiple User Capabilities",
			"No Extra Charges & 7 Seater",
			"Night Ride & 24/7 Support",
		],
		popular: false,
	},
	{
		id: 4,
		plan: "Bike",
		price: 203,
		features: ["Fast Rider in Traffic", "Best for Single Rider", "No Extra Charges", "Standard support"],
		popular: false,
	},
	{
		id: 5,
		plan: "Mini",
		price: 1600,
		features: ["Fast & Comfy", "Best for 2 - 4 Rider", "No Extra Charges", "Night Ride & 24/7 Support"],
		popular: true,
	},
	{
		id: 6,
		plan: "Intercity ",
		price: 3506,
		features: [
			"Safe & Comfy",
			"Multiple User Capabilities",
			"No Extra Charges & 7 Seater",
			"Night Ride & 24/7 Support",
		],
		popular: false,
	},
];

export default function PricingContentTwo() {
	return (
		<section className="package-pricing-wrapper fix section-padding">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 offset-lg-2 text-center">
					<div className="block-contents fw500">
						<div className="section-title">
							<h2 className="wow fadeInUp">How we are <b style={{color:'blue'}}>affordable</b> <b>?</b></h2>
							<p className="wow fadeInUp pt-4" data-wow-delay=".3s">
							Unlike other cab-hailing services, Rider Application stands out with its unparalleled commitment to safety, comfort, and fair economics for both drivers and users, offering a transformative ride-hailing experience that prioritizes your journey above all else.
							</p>
						</div>
					</div>
				</div>

				<PricingTwo content={pricingData} />
			</div>
		</section>
	);
}
