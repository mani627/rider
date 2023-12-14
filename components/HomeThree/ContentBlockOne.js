import React from 'react';

export default function ContentBlockOne() {
  return (
		<section className="content-block style-2 section-padding fw500">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-5 pe-xl-0">
						<div className="block-img">
							<img src="/img/home3/one.png" alt="" />
						</div>
					</div>
					<div className="col-xl-6 mt-5 mt-xl-0 offset-xl-1 ps-xl-5">
						<div className="block-contents">
							<div className="section-title mb-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
								<h2>Drive Smart, Earn More: Rider's Low Commission Boosts Driver Independence!</h2>
							</div>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
							Experience financial empowerment with Rider's low commission driver application. Our platform is designed to help drivers maximize earnings, providing a pathway to greater independence. Join us and drive your way to success with transparency, fair commissions, and unparalleled support.
							</p>
							<ul className="checked-list bg-checked">
								<li className="wow fadeInUp" data-wow-delay=".5s">
								Model ensures drivers keep more of what they earn.
								</li>
								<li className="wow fadeInUp" data-wow-delay=".7s">
								Clarity in earnings with Rider's fair and transparent commission structure.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
