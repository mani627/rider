import { AiTwotonePhone } from "react-icons/ai";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Map from "../GoogleMap/Map";
import ContactCard from "./ContactCard";
import Form from "./Form";

export default function ContactContent() {
	return (
		<section className="contact-us-wrapper section-padding">
			<div className="container">
			<div className="row mt-4 mt-lg-5">
					<div className="col-lg-8 col-xl-6 offset-xl-3 offset-lg-2 text-center">
						<div className="block-contents">
							<div className="section-title mb-4">
								<h2 className="wow fadeInUp">Get in touch now!</h2>
							
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					
					<div className="col-lg-12 pls-lg-4 wow fadeInUp order-1 order-lg-2">
						<Form />
					</div>
				</div>
				<div className="row text-center">
					<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<AiTwotonePhone />}
							contentOne="+91 9999999999"
							ContentTwo="+91 9999999999"
							className="box1"
						/>
					</div>
					<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<FaEnvelope />}
							contentOne="support@werider.app"
							ContentTwo="rider.hailing.app@gmail.com"
							className="box2"
						/>
					</div>
					<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<FaMapMarkerAlt />}
							contentOne="Coimbatore"
							ContentTwo="Chennai"
							className="box3"
						/>
					</div>
				</div>

				

			
				
			</div>
		</section>
	);
}
