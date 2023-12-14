import { useRef } from "react";
import Slider from "react-slick";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function TestimonialTwo() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 950,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		lazyLoad: true,
		responsive: [
			{
				breakpoint: 1360,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1191,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const sliderRef = useRef(null);

	return (
		<section className="testimonial-carousel-wrapper section-bg section-padding fix">
			<div className="container">
				<div className="row fix align-items-center">
					<div className="col-lg-8">
						<div className="block-contents fw500 text-center text-lg-start">
							<div className="section-title">
								<h2 className="wow fadeInLeft" data-wow-duration="1.1s">
									We have powerful user experience
								</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-4 d-none d-lg-block text-center text-lg-end">
						<div className="testimoinial-nav style-2">
							<div onClick={() => sliderRef.current?.slickPrev()} className="testimonial-nav-prev">
								<BsArrowLeft className="icon-arrow-right" />
							</div>
							<div onClick={() => sliderRef.current?.slickNext()} className="testimonial-nav-next">
								<BsArrowRight className="icon-arrow-left" />
							</div>
						</div>
					</div>
				</div>

				<div className="testimonial-nav-carousel-active">
					<Slider ref={sliderRef} {...settings}>
						<div className="single-testimoinal-box">
						
							<div className="feedback">
								“Rider is my go-to for hassle-free commuting. The app is user-friendly, and the drivers are always punctual. It's like having a reliable travel companion at my fingertips!”
							</div>
							<div className="client-info">
								<div className="client-name">
									<h6>Rakesh K</h6>
									<span>User</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-box">
						
							<div className="feedback">
							From city explorations to last-minute plans, Rider has never let me down. The diverse range of vehicles and the quick response time make it my top choice for spontaneous adventures.
							</div>
							<div className="client-info">
								<div className="client-name">
									<h6>Sabari K</h6>
									<span>User</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-box">
						
							<div className="feedback">
							"As a daily commuter, Rider has streamlined my routine. The consistent service and affordable fares are a game-changer. Highly recommended for anyone navigating the urban grind!"
							</div>
							<div className="client-info">
								<div className="client-name">
									<h6>Kissan K</h6>
									<span>User</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-box">
						
							<div className="feedback">
								“Rider is my go-to for hassle-free commuting. The app is user-friendly, and the drivers are always punctual. It's like having a reliable travel companion at my fingertips!”
							</div>
							<div className="client-info">
								<div className="client-name">
									<h6>Vimal K</h6>
									<span>User</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-box">
						
							<div className="feedback">
							"Kudos to Rider for embracing sustainability! I appreciate the eco-friendly options, making it easy for me to contribute to a greener planet during my daily travels."
							</div>
							<div className="client-info">
								<div className="client-name">
									<h6>Vicky DJ</h6>
									<span>User</span>
								</div>
							</div>
						</div>
					
					</Slider>
				</div>

				<div className="col-lg-4 d-block mt-5 mr-lg-0 d-lg-none text-center">
					<div className="testimoinial-nav style-2">
						<div onClick={() => sliderRef.current?.slickPrev()} className="testimonial-nav-prev">
							<BsArrowLeft className="icon-arrow-right" />
						</div>
						<div onClick={() => sliderRef.current?.slickNext()} className="testimonial-nav-next">
							<BsArrowRight className="icon-arrow-left" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
