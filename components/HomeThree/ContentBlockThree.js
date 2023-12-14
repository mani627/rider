import React from 'react';

export default function ContentBlockThree() {
  return (
		<section className="content-block theme-bg section-padding fw500">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 pe-lg-0 col-12">
						<div className="mobile-block">
							<img src="/img/home3/features.png" alt="" />
						</div>
					</div>
					<div className="col-lg-6 mt-5 mt-lg-0 offset-lg-1 col-12 ps-lg-5 pe-lg-5">
						<div className="block-contents ms-xl-3">
							<div className="section-title mb-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
								<h2>Rider&Driver both happy, it's win-win!!</h2>
							</div>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
							Rider, where safety meets comfort, and economy embraces both drivers and users. We prioritize your well-being, ensure a smooth and cozy ride, and promote economic benefits for everyone on the journey.
							</p>
						</div>
						<div className="step-features">
							<div className="single-featured-item item1 wow fadeInUp" data-wow-delay=".3s">
								<h4>Revolutionary Commission Rates</h4>
								<p>
								Experience the Rider advantage with industry-leading low commission rates, ensuring drivers earn more while providing a secure and comfortable ride for users. 
								</p>
							</div>
							<div className="single-featured-item item2 wow fadeInUp" data-wow-delay=".5s">
								<h4>"Safe, Comfy, and Affordable</h4>
								<p>
								Step into a new era of ride-hailing where safety, comfort, and affordability converge. Rider App's hyper event-based model ensures not only a secure and cozy ride for users but also maximizes benefits for drivers.
								</p>
							</div>
							<div className="single-featured-item item3 wow fadeInUp" data-wow-delay=".7s">
								<h4>Elevate Your Journey</h4>
								<p>
								Rider App introduces a hyper event-based model that transforms your ride into an extraordinary experience.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
