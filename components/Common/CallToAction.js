import { useState, useEffect } from "react"
import queryString from 'query-string';

import { pushWishlist } from "../../Apis/apis";




export default function CallToAction() {



    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [success, setSucccess] = useState(false);
    const [errPrompt, seterrPrompt] = useState(false);

    const [redirect, setRedirect] = useState(false);

    const joinNow = (e) => {
        e.preventDefault();
        if(name && phone && email){
            pushWishlist({name, phone, email}).then((res) => {
                console.log(res);
                // setName("");
                // setEmail("");
                // setPhone("");
                setSucccess(true)
            }).catch((err) => {
                console.log("Error - ", err);
            })    
        }
        else{
            console.log("Field Missing");
        }
    }


    useEffect(() => {
        if(success){
            const message = `*Hello Rider!*, this is *${name}* \n Phone: ${phone}, interested in Rider Cab Hailing Application!!`;
            const whatsappUrl = `https://wa.me/+919342562860?text=${encodeURIComponent(message)}`;
            window.location.href = whatsappUrl;
        }
      }, [success]);

    return (
     <section className="cta-banner-wrapper section-padding pt-0">
        <div className="container">
            <div className="cta-banner text-white">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center col-xl-8 offset-xl-2">
                        <div className="cta-contents">
                            <h2 className="wow fadeInUp">Are you interested in a ride with us?</h2>
                            <div className="newsletter-form wow fadeInUp">
                                <form >
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" className="mb-2"/>
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Enter your phone" className="mb-2"/>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" className="mb-2"/>
                                    <button type="submit" className="submit-btn mb-1" onClick={joinNow}>Join Now</button>
                                </form>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
